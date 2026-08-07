---
name: C_OVERDUEPO
description: "Overduepo"
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
# C_OVERDUEPO

**Overduepo**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `name:'I_Currency'` |  | |  |  |  |  |
| `element:'Currency'` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'CMMOVERDUEPO'
@EndUserText.label: 'Overdue Purchase Order'
@VDM.viewType: #CONSUMPTION
@Analytics.dataCategory: #CUBE
@Metadata.ignorePropagatedAnnotations:true
//Commented by VDM CDS Suite Plugin:@ClientDependent: true
@OData.publish: true
@Metadata.allowExtensions: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
define view C_OverduePO

  with parameters
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency : displaycurrency,

    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language        : spras,
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_StartDate       : mm_a_delivery_date,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_EndDate         : mm_a_delivery_date

  as select from    P_POOverdueWithSupplierConf( P_DisplayCurrency: $parameters.P_DisplayCurrency ,
                                  P_StartDate: $parameters.P_StartDate,
                                  P_EndDate: $parameters.P_EndDate ) as OverduePO

    left outer join P_UnasgndMatGrpText                              as UnasgndMatGrpTex on PurchasingCategory = UnasgndMatGrpTex.PurchasingCategory

  association [1..1] to I_PurchasingCategoryMatlGroup as _PurchasingCategoryMatlGroup on  OverduePO.MaterialGroup = _PurchasingCategoryMatlGroup.MaterialGroup

  association [1..1] to I_PurgDocumentItemCategory    as _PurgDocumentItemCategory    on  $projection.PurchaseOrderItemCategory = _PurgDocumentItemCategory.PurchasingDocumentItemCategory

  association [0..1] to I_PurchasingDocumentType      as _PurchasingDocumentType      on  $projection.PurchaseOrderType     = _PurchasingDocumentType.PurchasingDocumentType
                                                                                      and $projection.PurchaseOrderCategory = _PurchasingDocumentType.PurchasingDocumentCategory

  association [1..1] to I_CalendarDate                as _CalendarDate                on  ScheduleLineDeliveryDate = _CalendarDate.CalendarDate

  association [1..1] to I_Material                    as _Material                    on  $projection.Material = _Material.Material

  association [1..1] to I_MaterialGroup               as _MaterialGroup               on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [1..1] to I_Plant                       as _Plant                       on  $projection.Plant = _Plant.Plant

  association [1..1] to C_PurchasingGroupValueHelp    as _PurchasingGroup             on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_UnitOfMeasure               as _UnitOfMeasure               on  _UnitOfMeasure.UnitOfMeasure = 'TAG'

  association [1..1] to C_OvrdPOSuplrConfStatusVH     as _OvrdPOSuplrConfStatus       on  _OvrdPOSuplrConfStatus.OvrdPOSuplrConfirmationStatus = $projection.OvrdPOSuplrConfirmationStatus
  
  association [1..1] to I_CompanyCode               as _CompanyCode                on $projection.PurgDocHdrCompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_CompanyCode               as _ReceivingCompanyCode       on $projection.CompanyCode = _ReceivingCompanyCode.CompanyCode

{ 

      /* Keys */
      @EndUserText.label: 'Purchase Order'
  key PurchaseOrder,

      @EndUserText.label: 'Purchase Order Item'
  key PurchaseOrderItem,

      @Consumption: {
                          filter: {
                                    mandatory: false,
                                    hidden: true,
                                    selectionType: #SINGLE,
                                    multipleSelections: false
                                  },
                          derivation: {
                                        lookupEntity: 'F_ProcmtAnalyticsDataSelMeth',
                                        resultElement: 'PurgDocMigrtnIsCmpltdForAnlyts'
                                      }
                        }
      @Environment.sql.passValue: true
      @UI.hidden: true
      PurgDocMigrtnIsCmpltdForAnlyts,


      /* Date Fields */
      _CalendarDate.CalendarWeek,
      _CalendarDate.CalendarMonth,
      _CalendarDate.CalendarQuarter,
      _CalendarDate.CalendarYear,

      /* Schedule Line Delivery Date*/
      cast(ScheduleLineDeliveryDate as mm_a_delivery_date)                                                                      as DeliveryDate,

      /* Organization Data*/
      @ObjectModel.text.element: ['PurchasingOrganizationName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PurchasingOrganizationName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingOrgValueHelp', element : 'PurchasingOrganization' } }]
      cast(PurchasingOrganization as mm_a_purg_org)                                                                             as PurchasingOrganization,
      @Semantics.text: true
      _PurchasingOrganization.PurchasingOrganizationName                                                                        as PurchasingOrganizationName,

      @ObjectModel.text.element: ['PurchasingGroupName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PurchasingGroupName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingGroupValueHelp', element : 'PurchasingGroup' } }]
      PurchasingGroup,
      @Semantics.text: true
      _PurchasingGroup.PurchasingGroupName                                                                                      as PurchasingGroupName,
      
      @ObjectModel.text.element: ['CompanyCodeName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'CompanyCodeName'
      @EndUserText.label: 'Company Code'
      PurgDocHdrCompanyCode,
      @Semantics.text: true
      _CompanyCode.CompanyCodeName,
      
      @ObjectModel.text.element: ['ReceivingCompanyCodeName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'ReceivingCompanyCodeName'
      @EndUserText.label: 'Receiving Plant Company Code'
      CompanyCode,
      @Semantics.text: true
      _ReceivingCompanyCode.CompanyCodeName as ReceivingCompanyCodeName,

      /* Supplier */
      @ObjectModel.text.element: ['SupplierName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'SupplierName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_SmplSupplierValueHelp', element : 'Supplier' } }]
      Supplier,
      @Semantics.text: true
      _Supplier.SupplierName                                                                                                    as SupplierName,
      @ObjectModel.text.element: ['CountryName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'CountryName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_CountryValueHelp', element : 'Country' } }]
      // cast( _Supplier.Country as mm_a_supplier_country )                                                      as SupplierCountry,
      SupplierCountry,
      @Semantics.text: true
      //_Supplier._CountryText[1: Language = $parameters.P_Language].CountryName,
      _Country.CountryName,

      /* Item Data */
      @ObjectModel.text.element: ['MaterialName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'MaterialName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_MaterialValueHelp', element : 'Material' } }]
      Material,
      @Semantics.text: true
      _Material._Text[1: Language = $parameters.P_Language].MaterialName,


      @ObjectModel.text.element: ['MaterialGroupName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'MaterialGroupName'
      OverduePO.MaterialGroup,
      @Semantics.text: true
      _MaterialGroup._Text[1: Language = $parameters.P_Language].MaterialGroupName,

      PurchaseOrderItemText,

      @UI.hidden: true
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingCategoryValueHelp', element : 'PurchasingCategory' } }]
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'PurgCatRelatedToMaterialGroup'
      @EndUserText.label: 'Purchasing Category (Deprecated)'
      _PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory                                                       as PurchasingCategory,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingCategoryValueHelp', element : 'PurchasingCategory' } }]
      cast(coalesce(_PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory ,'') as /srmsmc/purchasing_category_id) as PurgCatRelatedToMaterialGroup,

      @Semantics.text: true
      case when _PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName is null
            then  UnasgndMatGrpTex.PurgCatName                 //  'Material Group not linked to purchasing category'
           else _PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName
      end                                                                                                                       as PurgCatName,


      @ObjectModel.text.element: ['PlantName'] //Inserted by VDM CDS Suite Plugin
      @Consumption.labelElement: 'PlantName'
      Plant,
      @Semantics.text: true
      cast( _Plant.PlantName as mm_a_plant_name )                                                                               as PlantName,

      @Consumption.hidden: true
      :P_DisplayCurrency                                                                                                        as Currency,

      @Semantics.unitOfMeasure: true
      PurchaseOrderQuantityUnit,

      @EndUserText.label: 'Document Type'
      @ObjectModel.text.element: ['PurchasingDocumentTypeName']
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingDocumentType', element : 'PurchasingDocumentType' } }]
      PurchaseOrderType,
      @Semantics.text: true
      _PurchasingDocumentType._Text[1: Language = $parameters.P_Language].PurchasingDocumentTypeName                            as PurchasingDocumentTypeName,
      @Consumption.hidden: true
      PurchaseOrderCategory,
      @EndUserText.label: 'Item Category'
      @ObjectModel.text.element: ['PurgDocItemCategoryName']
      PurchaseOrderItemCategory,
      @Semantics.text: true
      _PurgDocumentItemCategory._Text[1: Language = $parameters.P_Language].PurgDocItemCategoryName,
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_OvrdPOSuplrConfStatusVH', element : 'OvrdPOSuplrConfirmationStatus' } }]
      @ObjectModel.text.element: ['OvrdPOSuplrConfirmationStsText']
      OvrdPOSuplrConfirmationStatus,
      @Semantics.text: true
      _OvrdPOSuplrConfStatus.OvrdPOSuplrConfirmationStsText,

      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as displaycurrency)                                                                               as DisplayCurrency,

      /* Measures */
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast( OpenPurchaseOrderNetAmount as mm_a_open_amount)                                                                     as OpenPurchaseOrderNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      cast( PurchaseOrderQty as mm_a_ordered_quantity)                                                                          as OrderedQuantity,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      cast( OpenPurchaseOrderQuantity as mm_a_open_quantity)                                                                    as OpenPurchaseOrderQuantity,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      cast( GoodsReceiptQuantity as  mm_a_delivererd_quantity)                                                                  as DeliveredQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.text.element: ['UnitOfMeasureName'] //Inserted by VDM CDS Suite Plugin
      //Commented by VDM CDS Suite Plugin:@Consumption.labelElement: 'UnitOfMeasureName'
      //Commented by VDM CDS Suite Plugin:
      _UnitOfMeasure.UnitOfMeasure,

      @EndUserText.label: 'Measurement Unit Text'
      @Semantics.text: true
      _UnitOfMeasure._Text[1: Language = $parameters.P_Language].UnitOfMeasureName,

      @DefaultAggregation: #MAX
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast(dats_days_between(ScheduleLineDeliveryDate,today )as mm_a_overdue_days)                                              as OverdueDays,

      @DefaultAggregation: #SUM
      cast(1  as mm_a_open_items_number)                                                                                        as NumberOfOpenItems


}
```
