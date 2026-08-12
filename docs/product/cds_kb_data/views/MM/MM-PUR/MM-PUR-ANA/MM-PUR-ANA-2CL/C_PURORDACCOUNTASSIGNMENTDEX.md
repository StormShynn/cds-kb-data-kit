---
name: C_PURORDACCOUNTASSIGNMENTDEX
description: "Purordaccountassignmentdex"
app_component: MM-PUR-ANA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURORDACCOUNTASSIGNMENTDEX

**Purordaccountassignmentdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `AccountAssignmentNumber` | ✓ | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistrPercent` |  | |  |  |  |  |
| `PurgDocNetAmount` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  | `cast ( WBSElementInternalID as ps_s4_pspnr preserving type)` |  |  |
| `ProjectNetworkInternalID` |  | |  |  |  |  |
| `CommitmentItem` |  | |  | `cast(CommitmentItem as abap.char(24))` |  |  |
| `CommitmentItemShortID` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `IsFinallyInvoiced` |  | |  |  |  |  |
| `RealEstateObject` |  | |  | `cast ( RealEstateObject as farp_imkey preserving type)` |  |  |
| `NetworkActivityInternalID` |  | |  |  |  |  |
| `PartnerAccountNumber` |  | |  |  |  |  |
| `JointVentureRecoveryCode` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderIntBillOfOperationsItem` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `NonDeductibleInputTaxAmount` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `EarmarkedFundsDocument` |  | |  |  |  |  |
| `EarmarkedFundsDocumentItem` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `PurchaseOrderItemCategory` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `PurchaseOrderItemText` |  | |  |  |  |  |
| `PurgDocumentItemDeletionCode` |  | |  | `PurchasingDocumentDeletionCode` |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  | `ProductType` |  |  |
| `IsStatisticalItem` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `_PurchaseOrderDEX` | | ✓ | | | | |
| `_PurchaseOrderItemDEX` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchaseOrderType` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderDEX` | `C_PurchaseOrderDEX` | [1..1] |
| `_PurchaseOrderItemDEX` | `C_PurchaseOrderItemDEX` | [1..1] |

## Source Code

```abap
@AccessControl:{ authorizationCheck             : #CHECK,
                 personalData.blocking          : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label: 'Data Extraction for Purchase Order Account Assignments'

@ObjectModel :{ usageType.dataClass             : #TRANSACTIONAL,
                usageType.sizeCategory          : #L,
                usageType.serviceQuality        : #D,
                supportedCapabilities           : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                                   : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations           : true

@Analytics: { dataCategory                      : #FACT,
              dataExtraction: {
                enabled                         : true,
                delta.changeDataCapture         : {
                    mapping:[ { table           : 'ekkn', role: #MAIN,
                                viewElement     : ['PurchaseOrder', 'PurchaseOrderItem', 'AccountAssignmentNumber'],
                                tableElement    : ['ebeln', 'ebelp', 'zekkn']
                              },
                              { table           : 'ekpo', role: #LEFT_OUTER_TO_ONE_JOIN,
                                viewElement     : ['PurchaseOrder', 'PurchaseOrderItem'],
                                tableElement    : ['ebeln', 'ebelp']
                              },
                              {
                                table           : 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                                viewElement     : ['PurchaseOrder'],
                                tableElement    : ['ebeln']
                              }
                            ]
                }
              }
}
@Analytics.technicalName: 'CMMPURORDAADEX'
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrder'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view entity C_PurOrdAccountAssignmentDEX
  as select from I_PurOrdAccountAssignmentAPI01
  
    association [1..1] to C_PurchaseOrderDEX           as _PurchaseOrderDEX          on  $projection.PurchaseOrder     = _PurchaseOrderDEX .PurchaseOrder
    association [1..1] to C_PurchaseOrderItemDEX       as _PurchaseOrderItemDEX      on  $projection.PurchaseOrder     = _PurchaseOrderItemDEX .PurchaseOrder
                                                                                     and $projection.PurchaseOrderItem = _PurchaseOrderItemDEX .PurchaseOrderItem  
  
  association to one I_PurchaseOrderType          as _PurchaseOrderType         on _PurchaseOrderType.PurchaseOrderType = $projection.PurchaseOrderType
  
  association to one I_Currency                   as _DocumentCurrency           on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  
  association to one I_Plant                      as _SupplyingPlant             on  $projection.SupplyingPlant = _SupplyingPlant.Plant
  
  association to one I_PurchasingOrganization     as _PurchasingOrganization     on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association to one I_PurchasingGroup            as _PurchasingGroup            on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association to one I_PurgDocumentItemCategory   as _ItemCategory               on  $projection.PurchaseOrderItemCategory = _ItemCategory.PurchasingDocumentItemCategory
  
  association to one I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
  association to one I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant
    
  association to one I_StorageLocation            as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                   and $projection.StorageLocation = _StorageLocation.StorageLocation                                                                               
  association to one I_Product                    as _Product                   on  $projection.Material = _Product.Product
     
  association to one I_ProductGroup_2             as _ProductGroup              on  $projection.MaterialGroup = _ProductGroup.ProductGroup

  association to one I_ProductTypeCode            as _ProductTypeCode           on  $projection.ProductTypeCode = _ProductTypeCode.ProductTypeCode 

  association to one I_UnitOfMeasure              as _OrderQuantityUnit         on  $projection.PurchaseOrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure
  
  association to one I_SalesOrder                 as _SalesOrder                 on  $projection.SalesOrder = _SalesOrder.SalesOrder
   
  association to one I_SalesOrderItem             as _SalesOrderItem            on  $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
                                                                                    and $projection.SalesOrder     = _SalesOrderItem.SalesOrder         
  association to one I_GLAccount                  as _GLAccount                  on $projection.GLAccount = _GLAccount.GLAccount
                                                                                 and $projection.CompanyCode = _GLAccount.CompanyCode 
  association to one I_FixedAsset                 as _FixedAsset                 on  $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                    and $projection.FixedAsset       = _FixedAsset.FixedAsset  
                                                                                    and $projection.CompanyCode = _FixedAsset.CompanyCode 
                                                                                             
  association to one I_ControllingArea            as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea     
   
  association to one I_FunctionalArea             as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea    
                                                                      
  association to one I_BusinessProcess            as _BusinessProcess            on  $projection.ControllingArea = _BusinessProcess.ControllingArea
                                                                                    and $projection.BusinessProcess = _BusinessProcess.BusinessProcess
  association to one C_PurchaseContractDEX        as _PurchaseContract          on  $projection.PurchaseContract = _PurchaseContract.PurchaseContract

  association to one C_PurchaseContractItemDEX    as _PurchaseContractItem      on  $projection.PurchaseContract     = _PurchaseContractItem.PurchaseContract
                                                                                       and $projection.PurchaseContractItem = _PurchaseContractItem.PurchaseContractItem   
                                                                                                                                                                   


{
  key PurchaseOrder                                               as PurchaseOrder,
  key PurchaseOrderItem                                           as PurchaseOrderItem,
  key AccountAssignmentNumber                                     as AccountAssignmentNumber,

      CostCenter                                                  as CostCenter,

      MasterFixedAsset                                            as MasterFixedAsset,

      ProjectNetwork                                              as ProjectNetwork,

      @Semantics: { quantity.unitOfMeasure : 'PurchaseOrderQuantityUnit' }
      Quantity                                                    as Quantity,

      PurchaseOrderQuantityUnit                                   as PurchaseOrderQuantityUnit,

      MultipleAcctAssgmtDistrPercent                              as MultipleAcctAssgmtDistrPercent,

      @Semantics: { amount.currencyCode: 'DocumentCurrency' }
      PurgDocNetAmount                                            as PurgDocNetAmount,

      DocumentCurrency                                            as DocumentCurrency,

      IsDeleted                                                   as IsDeleted,

      @ObjectModel.foreignKey.association: '_GLAccount' 
      GLAccount                                                   as GLAccount,

      BusinessArea                                                as BusinessArea,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder                                                  as SalesOrder,

      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem                                              as SalesOrderItem,

      SalesOrderScheduleLine                                      as SalesOrderScheduleLine,

      @ObjectModel.foreignKey.association: '_FixedAsset'
      FixedAsset                                                  as FixedAsset,

      OrderID                                                     as OrderID,

      UnloadingPointName                                          as UnloadingPointName,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea                                             as ControllingArea,

      CostObject                                                  as CostObject,

      @API.element: { releaseState: #DECOMMISSIONED, successor: 'ProfitabilitySegment_2' }
      cast( case when ProfitabilitySegment_2 > '9999999999'
                  then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' )
                 end as rkeobjnr_numc )                           as ProfitabilitySegment,

      ProfitabilitySegment_2                                      as ProfitabilitySegment_2,

      ProfitCenter                                                as ProfitCenter,

      cast ( WBSElementInternalID as ps_s4_pspnr preserving type) as WBSElementInternalID,

      ProjectNetworkInternalID                                    as ProjectNetworkInternalID,

      cast(CommitmentItem as abap.char(24))                       as CommitmentItem,
      //CommitmentItem                               as CommitmentItem,
      CommitmentItemShortID                                       as CommitmentItemShortID,

      FundsCenter                                                 as FundsCenter,

      Fund                                                        as Fund,

      FunctionalArea                                              as FunctionalArea,

      GoodsRecipientName                                          as GoodsRecipientName,

      IsFinallyInvoiced                                           as IsFinallyInvoiced,


      cast ( RealEstateObject as farp_imkey preserving type)      as RealEstateObject,


      NetworkActivityInternalID                                   as NetworkActivityInternalID,

      PartnerAccountNumber                                        as PartnerAccountNumber,

      JointVentureRecoveryCode                                    as JointVentureRecoveryCode,

      SettlementReferenceDate                                     as SettlementReferenceDate,

      OrderInternalID                                             as OrderInternalID,

      OrderIntBillOfOperationsItem                                as OrderIntBillOfOperationsItem,

      TaxCode                                                     as TaxCode,

      TaxJurisdiction                                             as TaxJurisdiction,

      @Semantics: { amount.currencyCode: 'DocumentCurrency' }
      NonDeductibleInputTaxAmount                                 as NonDeductibleInputTaxAmount,

      CostCtrActivityType                                         as CostCtrActivityType,

      @ObjectModel.foreignKey.association: '_BusinessProcess'
      BusinessProcess                                             as BusinessProcess,

      GrantID                                                     as GrantID,

      BudgetPeriod                                                as BudgetPeriod,

      EarmarkedFundsDocument                                      as EarmarkedFundsDocument,

      EarmarkedFundsDocumentItem                                  as EarmarkedFundsDocumentItem,

      ServiceDocumentType                                         as ServiceDocumentType,

      ServiceDocument                                             as ServiceDocument,

      ServiceDocumentItem                                         as ServiceDocumentItem,
      
      @ObjectModel.foreignKey.association: '_PurchaseOrderType' 
      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.PurchaseOrderType                            as PurchaseOrderType,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization' 
      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.PurchasingOrganization                       as PurchasingOrganization,

      @ObjectModel.foreignKey.association: '_PurchasingGroup' 
      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.PurchasingGroup                              as PurchasingGroup,

      @Semantics.systemDate.createdAt: true
      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.CreationDate                                 as CreationDate,

      @Semantics.systemDateTime.lastChangedAt: true
      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.LastChangeDateTime                           as LastChangeDateTime,

      @ObjectModel.foreignKey.association: '_Plant' 
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.Plant                                    as Plant,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.AccountAssignmentCategory                as AccountAssignmentCategory,

      @ObjectModel.foreignKey.association: '_CompanyCode' 
      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.CompanyCode                                  as CompanyCode,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.IsReturnsItem                            as IsReturnsItem,

      @ObjectModel.foreignKey.association: '_SupplyingPlant'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.SupplyingPlant                               as SupplyingPlant,

      @ObjectModel.foreignKey.association: '_ItemCategory'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.PurchaseOrderItemCategory                as PurchaseOrderItemCategory,

      @ObjectModel.foreignKey.association: '_Product'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.Material                                 as Material,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.MaterialGroup                            as MaterialGroup,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.PurchaseOrderDate                            as PurchaseOrderDate,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.StorageLocation                          as StorageLocation,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.IsCompletelyDelivered                    as IsCompletelyDelivered,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.PurchasingInfoRecord                     as PurchasingInfoRecord,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.RequirementTracking                      as RequirementTracking,

      @Semantics.text: true
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.PurchaseOrderItemText                    as PurchaseOrderItemText,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.PurchasingDocumentDeletionCode           as PurgDocumentItemDeletionCode,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.PurchasingDocumentDeletionCode               as PurchasingDocumentDeletionCode,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.InvoiceIsExpected                        as InvoiceIsExpected,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.GoodsReceiptIsExpected                   as GoodsReceiptIsExpected,

      @ObjectModel.foreignKey.association: '_ProductTypeCode'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.ProductType                              as ProductTypeCode,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.IsStatisticalItem                        as IsStatisticalItem,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.ReleaseIsNotCompleted                        as ReleaseIsNotCompleted,

      I_PurOrdAccountAssignmentAPI01._PurchaseOrder.PurchasingCompletenessStatus                 as PurchasingCompletenessStatus,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContract'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.PurchaseContract                         as PurchaseContract,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContractItem'
      I_PurOrdAccountAssignmentAPI01._PurchaseOrderItem.PurchaseContractItem                     as PurchaseContractItem,
      
       @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
       _PurchaseOrderDEX,
       
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
       _PurchaseOrderItemDEX,
       
       _SalesOrder,      
       _SalesOrderItem,
       _CompanyCode,
      _PurchaseOrderType,
      _PurchasingOrganization,
      _PurchasingGroup,
      _DocumentCurrency,
      _SupplyingPlant,
      _Plant,
      _ItemCategory,
      _StorageLocation,
      _Product,
      _ProductTypeCode,
      _ProductGroup ,
      _OrderQuantityUnit,
      _PurchaseContract,
      _PurchaseContractItem,
      _FixedAsset,
      _ControllingArea,
      _FunctionalArea,
      _BusinessProcess,
      _GLAccount


}
```
