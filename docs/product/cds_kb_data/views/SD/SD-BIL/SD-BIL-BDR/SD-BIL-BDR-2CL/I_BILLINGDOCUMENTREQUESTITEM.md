---
name: I_BILLINGDOCUMENTREQUESTITEM
description: "Billing DocumentUMENTREQUESTITEM"
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - billing-document
  - billing
  - document
  - item-level
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTREQUESTITEM

**Billing DocumentUMENTREQUESTITEM**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentRequest` | ✓ | |  | `cast (BillingDocument as vbeln_bdr preserving type)` |  |  |
| `BillingDocumentRequestItem` | ✓ | |  | `cast (BillingDocumentItem as posnr_bdr preserving type)` |  |  |
| `SalesDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `ReturnItemProcessingType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `ReferenceLogicalSystem` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `PricingReferenceMaterial` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `MaterialCommissionGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `BillingDocumentRequestItemText` |  | |  | `cast( BillingDocumentItemText as billing_doc_request_item_text preserving type )` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `BillingQuantity` |  | |  | `cast( BillingQuantity as billing_quantity preserving type )` |  |  |
| `BillingQuantityUnit` |  | |  | `cast( BillingQuantityUnit as billing_quantity_unit preserving type )` |  |  |
| `BillingQuantityInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `MRPRequiredQuantityInBaseUnit` |  | |  |  |  |  |
| `BillingToBaseQuantityDnmntr` |  | |  | `cast( BillingToBaseQuantityDnmntr as billing_to_base_qty_dnmntr preserving type )` |  |  |
| `BillingToBaseQuantityNmrtr` |  | |  | `cast( BillingToBaseQuantityNmrtr as billing_to_base_qty_nmrtr preserving type )` |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `GrossAmount` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `PricingScaleQuantityInBaseUnit` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `CashDiscountIsDeductible` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `DepartureCountry` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `ProductTaxClassification1` |  | |  |  |  |  |
| `ProductTaxClassification2` |  | |  |  |  |  |
| `ProductTaxClassification3` |  | |  |  |  |  |
| `ProductTaxClassification4` |  | |  |  |  |  |
| `ProductTaxClassification5` |  | |  |  |  |  |
| `ProductTaxClassification6` |  | |  |  |  |  |
| `ProductTaxClassification7` |  | |  |  |  |  |
| `ProductTaxClassification8` |  | |  |  |  |  |
| `ProductTaxClassification9` |  | |  |  |  |  |
| `ZeroVATRsn` |  | |  |  |  |  |
| `BillgDocReqBillgSts` |  | |  | `cast( DocumentBillingStatus as bdr_status preserving type )` |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `BillingPeriodOfPerfStartDate` |  | |  |  |  |  |
| `BillingPeriodOfPerfEndDate` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProviderContract` |  | |  |  |  |  |
| `ProviderContractItem` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast ( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `OriginSDDocumentItem` |  | |  |  |  |  |
| `PriceDetnExchangeRateDate` |  | |  |  |  |  |
| `MatlAccountAssignmentGroup` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  | `cast( ReferenceSDDocument as sdbil_odata_source_document preserving type )` |  |  |
| `ReferenceDocumentItem` |  | |  | `cast( ReferenceSDDocumentItem as sdbil_odata_src_doc_item preserving type )` |  |  |
| `ReferenceDocSDDocCategory` |  | |  | `cast( ReferenceSDDocumentCategory as sdbil_odata_src_doc_cat preserving type )` |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `SalesSDDocumentCategory` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `BillgDocRequestItemInPartSgmt` |  | |  | `BillingDocumentItemInPartSgmt` |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `ItemIsRelevantForCredit` |  | |  |  |  |  |
| `CreditRelatedPrice` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentRequestType` |  | |  | `cast (BillingDocumentType as sdbil_odata_bdr_type preserving type )` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `CityCode` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `_ReferenceDocSDDocCategory` |  | |  | `_ReferenceSDDocumentCategory` |  |  |
| `_BillingDocumentRequestType` |  | |  | `_BillingDocumentType` |  |  |
| `_BillingDocumentRequest` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |
| `_BillgDocReqBillgSts` | | ✓ | | | | |
| `_SalesDocumentItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ReferenceLogicalSystem` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_PricingReferenceMaterial` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_MaterialCommissionGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_BillingQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_StatisticalValueControl` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_DepartureCountry` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenter_2` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_SalesSDDocumentCategory` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_MatlAccountAssignmentGroup` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_PricingReferenceMaterialText` | | ✓ | | | | |
| `_OriginallyRequestedMatlText` | | ✓ | | | | |
| `_SoldProductText` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CityCode` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentRequest` | `I_BillingDocumentRequest` | [1..1] |
| `_Partner` | `I_BillingDocReqItemPartner` | [0..*] |
| `_PricingElement` | `I_BillingDocReqItemPrcgElmnt` | [0..*] |
| `_HigherLevelItem` | `I_BillingDocumentRequestItem` | [1..1] |
| `_BillgDocReqBillgSts` | `I_BillgDocReqBillgSts` | [0..1] |
| `_Extension` | `E_BillingDocumentItem` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.representativeKey: 'BillingDocumentRequestItem'
@ObjectModel.sapObjectNodeType.name: 'BillingDocumentRequestItem'
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@Analytics.dataCategory: #DIMENSION
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbrp', role: #MAIN,
                    viewElement: ['BillingDocumentRequest', 'BillingDocumentRequestItem'],
                    tableElement: ['vbeln', 'posnr']
                }

            ]
        }
    }
 }
@EndUserText.label: 'Billing Document Request Item'
@VDM.viewType: #BASIC
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_CreatedByUser','_BusinessAreaText', '_PricingReferenceMaterialText', '_OriginallyRequestedMatlText', '_MaterialText', '_ProductText'] 
}
@AbapCatalog: {
  sqlViewName: 'ISDBILDOCREQIT',
  compiler.compareFilter: true,
  preserveKey: true
} 

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingDocumentRequestItem
  as select from I_BillingDocumentItemBasic
  association[1..1] to I_BillingDocumentRequest     as _BillingDocumentRequest     on  $projection.BillingDocumentRequest          = _BillingDocumentRequest.BillingDocumentRequest
  association[0..*] to I_BillingDocReqItemPartner   as _Partner                    on  $projection.BillingDocumentRequest          = _Partner.BillingDocumentRequest                                          
                                                                                   and $projection.BillingDocumentRequestItem      = _Partner.BillingDocumentRequestItem
  association[0..*] to I_BillingDocReqItemPrcgElmnt as _PricingElement             on  $projection.BillingDocumentRequest          = _PricingElement.BillingDocumentRequest
                                                                                   and $projection.BillingDocumentRequestItem      = _PricingElement.BillingDocumentRequestItem
                                                                        
  association[1..1] to I_BillingDocumentRequestItem as _HigherLevelItem            on  $projection.BillingDocumentRequest          = _HigherLevelItem.BillingDocumentRequest
                                                                                   and $projection.HigherLevelItem                 = _HigherLevelItem.BillingDocumentRequestItem
                                                                         
  association[0..1] to I_BillgDocReqBillgSts       as _BillgDocReqBillgSts         on  $projection.BillgDocReqBillgSts             = _BillgDocReqBillgSts.BillgDocReqBillgSts        
  
  //Extensibility
  association[1]    to E_BillingDocumentItem        as _Extension                 on  $projection.BillingDocumentRequest           = _Extension.BillingDocument
                                                                                  and $projection.BillingDocumentRequestItem       = _Extension.BillingDocumentItem                                                                   
                                                                             
{
      //Key
  @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BillingDocumentRequestStdVH',
                     element: 'BillingDocumentRequest' }
        }]
  @ObjectModel.foreignKey.association: '_BillingDocumentRequest'
  key cast (BillingDocument as vbeln_bdr preserving type)     as BillingDocumentRequest,
  @ObjectModel.text.element:  ['BillingDocumentRequestItemText']   
  key cast (BillingDocumentItem as posnr_bdr preserving type) as BillingDocumentRequestItem,

      //Category
      @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
      SalesDocumentItemCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
      SalesDocumentItemType,
      ReturnItemProcessingType,
      
      //Admin
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt
      CreationTime,      
      @ObjectModel.foreignKey.association: '_ReferenceLogicalSystem'
      ReferenceLogicalSystem,
      
      //Organization
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      
      //Product
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_MaterialText'
      @ObjectModel.foreignKey.association: '_Material'
      @API.element: { releaseState: #DEPRECATED, successor: 'Product' }
      @VDM.lifecycle: { status: #DEPRECATED, successor: 'Product' }            
      Material,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_ProductText'
      @ObjectModel.foreignKey.association: '_Product'
      Product,          
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_OriginallyRequestedMatlText'
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      OriginallyRequestedMaterial,
      InternationalArticleNumber,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_PricingReferenceMaterialText'
      @ObjectModel.foreignKey.association: '_PricingReferenceMaterial'
      PricingReferenceMaterial,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BatchStdVH',
                     element: 'Batch' },
          additionalBinding: [{ localElement: 'Plant',
                                element: 'Plant' },
                              { localElement: 'Material',
                                element: 'Material' }]
        }]
      @ObjectModel.foreignKey.association: '_Batch'
      Batch,
      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
      ProductHierarchyNode,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element: { releaseState: #DEPRECATED, successor: 'ProductGroup' }      
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,      
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_MaterialCommissionGroup'
      MaterialCommissionGroup,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_SoldProductText'
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,    

      //Billing
      @Semantics.text: true      
      cast( BillingDocumentItemText as billing_doc_request_item_text preserving type ) as BillingDocumentRequestItemText,
      ServicesRenderedDate,
      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      cast( BillingQuantity as billing_quantity preserving type ) as BillingQuantity,      
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BillingQuantityUnit'
      cast( BillingQuantityUnit as billing_quantity_unit preserving type ) as BillingQuantityUnit,      
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      BillingQuantityInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPRequiredQuantityInBaseUnit,
      cast( BillingToBaseQuantityDnmntr as billing_to_base_qty_dnmntr preserving type ) as BillingToBaseQuantityDnmntr,      
      cast( BillingToBaseQuantityNmrtr as billing_to_base_qty_nmrtr preserving type ) as BillingToBaseQuantityNmrtr,      
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,
      
      //Pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      GrossAmount,
      PricingDate,
      PriceDetnExchangeRate,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit' 
      PricingScaleQuantityInBaseUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TaxAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CostAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal1Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal2Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal3Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal4Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal5Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal6Amount,
      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      CashDiscountIsDeductible,
      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'      
      TimeSheetOvertimeCategory,  
      
      // Tax
      @ObjectModel.foreignKey.association: '_DepartureCountry'
      DepartureCountry,
      TaxJurisdiction,
      ProductTaxClassification1,
      ProductTaxClassification2,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,
      ZeroVATRsn,

      //Status
      @ObjectModel.foreignKey.association: '_BillgDocReqBillgSts'
      cast( DocumentBillingStatus as bdr_status preserving type ) as BillgDocReqBillgSts, 

      //Accounting
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'      
      ProfitCenter,
      BillingPeriodOfPerfStartDate,
      BillingPeriodOfPerfEndDate,
      OrderID,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'      
      WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_ProviderContract'
      ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      ProviderContractItem,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @API.element: { releaseState: #DECOMMISSIONED, successor: 'ProfitabilitySegment_2' }
      cast ( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc ) as ProfitabilitySegment,      
      ProfitabilitySegment_2,
      @ObjectModel.foreignKey.association: '_CostCenter_2'      
      CostCenter,
      OriginSDDocument,
      OriginSDDocumentItem,
      PriceDetnExchangeRateDate,
      @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
      MatlAccountAssignmentGroup,

      //Reference
      cast( ReferenceSDDocument as sdbil_odata_source_document preserving type ) as ReferenceDocument,
      cast( ReferenceSDDocumentItem as sdbil_odata_src_doc_item preserving type ) as ReferenceDocumentItem,      
      @ObjectModel.foreignKey.association: '_ReferenceDocSDDocCategory'
      cast( ReferenceSDDocumentCategory as sdbil_odata_src_doc_cat preserving type ) as ReferenceDocSDDocCategory,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_SalesDocumentStdVH',
                     element: 'SalesDocument' }
        }]
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_SalesDocumentItemStdVH',
                     element: 'SalesDocumentItem' },
          additionalBinding: [{ localElement: 'SalesDocument',
                                element: 'SalesDocument' }]
        }]
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_SalesSDDocumentCategory'
      SalesSDDocumentCategory,
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_BillingDocReqItemStdVH',
                     element: 'BillingDocumentRequestItem' },
          additionalBinding: [{ localElement: 'BillingDocumentRequest',
                                element: 'BillingDocumentRequest' }]
        }]
      @ObjectModel.foreignKey.association: '_HigherLevelItem'      
      HigherLevelItem,      
      BillingDocumentItemInPartSgmt as BillgDocRequestItemInPartSgmt,

      //Sales
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      ItemIsRelevantForCredit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'      
      CreditRelatedPrice,
      
      //CRM
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'      
      ServiceDocumentType,
      ServiceDocument,
      ServiceDocumentItem, 
      
      // Solution
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,
      
      //Added Analytics fields
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillingDocumentRequestType'
      cast (BillingDocumentType as sdbil_odata_bdr_type preserving type ) as BillingDocumentRequestType, 
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_Country'
      Country,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @ObjectModel.foreignKey.association: '_CityCode'
      CityCode,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      //sales
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_County'
      County,
      //ship-to
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]

      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      //bill-to
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]

      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      SalesEmployee,
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      ResponsibleEmployee,     
      
         //association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _BillingDocumentRequest,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]            
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]      
      _PricingElement,
      _SalesDocumentItemCategory,
      _SalesDocumentItemType,
      _CreatedByUser,
      _ReferenceLogicalSystem,
      _OrganizationDivision,
      _Division,
      _SalesOffice,
      @API.element: { releaseState: #DEPRECATED, successor: '_Product' }
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _PricingReferenceMaterial,
      _Batch,
      _ProductHierarchyNode,
      @API.element: { releaseState: #DEPRECATED, successor: '_ProductGroup' }
      _MaterialGroup,
      _ProductGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _MaterialCommissionGroup,
      _Plant,
      _SoldProduct,
      _StorageLocation,
      _BillingQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _TransactionCurrency,
      _StatisticalValueControl,
      _TimeSheetOvertimeCat,
      _DepartureCountry,
      _BusinessArea,
      _ProfitCenter,      
      _WBSElementBasicData,
      _ControllingArea,
      @API.element: { releaseState: #DEPRECATED, successor: '_CostCenter_2' }
      _CostCenter,
      _CostCenter_2,
      _ReferenceSDDocumentCategory as _ReferenceDocSDDocCategory,
      _SalesDocument,
      _SalesDocumentItem,
      _SalesSDDocumentCategory,
      _HigherLevelItem,
      _BillgDocReqBillgSts,
      _SalesGroup,
      _MatlAccountAssignmentGroup,
      _ServiceDocumentType,
      _ProviderContract,
      _ProviderContractItem,

      @Consumption.hidden: true
      @API.element: { releaseState: #DEPRECATED, successor: '_ProductText' }
      _MaterialText,
      @Consumption.hidden: true
      _ProductText,
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _PricingReferenceMaterialText,      
      @Consumption.hidden: true
      _OriginallyRequestedMatlText,
      @Consumption.hidden: true
      _SoldProductText,
      
      //Analytics
      _SDDocumentCategory,
      _BillingDocumentType as _BillingDocumentRequestType,
      _SalesOrganization,
      _DistributionChannel,
      _CustomerPriceGroup,
      _CustomerGroup,
      _Country,
      _Region,
      _CityCode,
      _SalesDistrict,
      _SoldToParty,
      _PayerParty,
      _CompanyCode,
      _County,
      _ShipToParty,
      _BillToParty,
      _SalesEmployee,
      _ResponsibleEmployee
}
where
  SDDocumentCategory = 'EBDR';
```
