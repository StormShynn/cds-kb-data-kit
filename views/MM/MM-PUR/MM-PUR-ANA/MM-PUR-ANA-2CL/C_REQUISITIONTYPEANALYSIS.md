---
name: C_REQUISITIONTYPEANALYSIS
description: Requisitiontypeanalysis
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_REQUISITIONTYPEANALYSIS

**Requisitiontypeanalysis**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `name:'C_GregorianCalDateFuncVH'` |  | |  |  |
| `element:'DateFunction'` |  | |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L  //Inserted by VDM CDS Suite Plugin
@AbapCatalog.sqlViewName: 'CMMREQTYPEANA'
@Analytics.dataCategory: #CUBE
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Purchase Requisition Type Analysis'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@OData.publish: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view C_RequisitionTypeAnalysis

  with parameters
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_StartDate    : vdm_validitystart,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_EndDate      : vdm_validityend 

  as select from    P_RequisitionTypeAnalysis( P_StartDate:$parameters.P_StartDate , P_EndDate: $parameters.P_EndDate) as RequisitionItem

    left outer join I_CalendarDate                                                                                     as RelevantDates               on RequisitionItem.CreationDate = RelevantDates.CalendarDate

    left outer join I_PurchasingCategoryMatlGroup                                                                      as PurchasingCategoryMatlGroup on RequisitionItem.MaterialGroup = PurchasingCategoryMatlGroup.MaterialGroup

  association [1..1] to I_Purreqvaluationarea      as _PurReqValuationArea  on  $projection.Plant = _PurReqValuationArea.ValuationArea

  association [1..1] to C_MM_MaterialValueHelp     as _Material             on  $projection.Material = _Material.Material
                                                                            and $projection.Plant    = _Material.Plant
  association [1..1] to I_MaterialGroup            as _MaterialGroup        on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [1..1] to C_PurchasingGroupValueHelp as _PurchasingGroup      on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [1..1] to C_PurchasingOrgValueHelp   as _PurchasingOrg        on  $projection.PurchasingOrganization = _PurchasingOrg.PurchasingOrganization

  association [1..1] to I_PurReqnItemClassfctn     as _PurReqnItemClassfctn on  $projection.PurReqnItemClassification = _PurReqnItemClassfctn.PurReqnItemClassification
  
  association [1..1] to I_PurReqnCreationInd       as _PurReqnCreationInd   on  $projection.PurReqnOrigin = _PurReqnCreationInd.PurReqnOrigin
  
  association [1..1] to I_Supplier                 as _Supplier             on  RequisitionItem.FixedSupplier = _Supplier.Supplier
{

  key RequisitionItem.PurchaseRequisition,
      @EndUserText.label: 'Requisition Item'
  key RequisitionItem.PurchaseRequisitionItem,
      //  key AccountAssignment.CostCenter,

      @ObjectModel.text.element: ['PurchasingGroupName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PurchasingGroupName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingGroupValueHelp', element : 'PurchasingGroup' } }]
      PurchasingGroup,
      @Semantics.text: true
      _PurchasingGroup.PurchasingGroupName,
      @ObjectModel.text.element: ['PurchasingOrganizationName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PurchasingOrganizationName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingOrgValueHelp', element : 'PurchasingOrganization' } }]
      @EndUserText.label: 'Purchasing Organization'
      PurchasingOrganization,
      @Semantics.text: true
      _PurchasingOrg.PurchasingOrganizationName,
      @ObjectModel.text.element: ['SupplierName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'SupplierName'
      cast(RequisitionItem.FixedSupplier as flief )                                                                             as FixedSupplier,
      @Semantics.text: true
      _Supplier.SupplierName,

      @ObjectModel.text.element: ['MaterialGroupName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'MaterialGroupName'
      RequisitionItem.MaterialGroup,
      @Semantics.text: true
      _MaterialGroup._Text[1: Language = $session.system_language].MaterialGroupName,
      @ObjectModel.text.element: ['MaterialName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'MaterialName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_MaterialValueHelp', element : 'Material' } }]
      Material,
      @Semantics.text: true
      _Material.MaterialName,
      @ObjectModel.text.element: ['PlantName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PlantName'
      Plant,
      @Semantics.text: true
      _Material.PlantName,
      
      @Semantics.unitOfMeasure: true
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: null
      @EndUserText.label: 'Quantity Requested'
      RequestedQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @DefaultAggregation: null
      @EndUserText.label: 'Price Unit'
      PurReqnPriceQuantity,
      @Semantics.currencyCode: true
      PurReqnItemCurrency,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      @DefaultAggregation: null
      PurchaseRequisitionPrice,
      
     // @Consumption.hidden: true
      @EndUserText.label: 'Purchasing Category (Deprecated)'
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'PurgCatRelatedToMaterialGroup'
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingCategoryValueHelp', element : 'PurchasingCategory' } }]
      PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory                                                        as PurchasingCategory,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingCategoryValueHelp', element : 'PurchasingCategory' } }]
      cast(coalesce(PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory ,'') as /srmsmc/purchasing_category_id ) as PurgCatRelatedToMaterialGroup,

      @Semantics.text: true
      PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName                                                               as PurgCatName,

      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_CompanyCodeValueHelp', element : 'CompanyCode' } }]
      _PurReqValuationArea.CompanyCode, // changed as PR company code sould be from valuation area 
        
      CreatedByUser,
      
      @ObjectModel.text.element: ['PurReqnOriginDesc']
      @EndUserText.label: 'Origin'
      @EndUserText.quickInfo: 'Origin'
      PurReqnOrigin,
      @Semantics.text: true
      _PurReqnCreationInd._Text[1: Language = $session.system_language].PurReqnOriginDesc,
      
      @Consumption.hidden: true
      CreationDate,
      RelevantDates.CalendarYear,
      RelevantDates.CalendarQuarter,
      RelevantDates.CalendarMonth,
      RelevantDates.CalendarWeek,

      @ObjectModel.text.element: ['PurReqItemClassificationText']
      PurReqnItemClassification,
      @Semantics.text: true
      _PurReqnItemClassfctn._PurReqnItemClassfctnText[1:Language = $session.system_language].PurReqItemClassificationText,
      @DefaultAggregation: #SUM
      cast(  1 as mm_a_purchasereqnitemcount )                                                                                  as PurchaseRequisitionItemCount,

      @DefaultAggregation: #SUM
      NmbrOfFreeTxtItmCrtedFrmSSP,

      @DefaultAggregation: #SUM
      NmbrOfMaterialItmCrtedFrmSSP,

      @DefaultAggregation: #SUM
      NmbrOfCatalogItmCrtedFrmSSP,

      @DefaultAggregation: #SUM
      NmbrOfMaterialItmCrtedManually,

      @DefaultAggregation: #SUM
      NmbrOfFreeTxtItmCrtedManually,
      
      @DefaultAggregation: #SUM
      NmbrOfMatlItmCrtedFrmExtSrce

}
```
