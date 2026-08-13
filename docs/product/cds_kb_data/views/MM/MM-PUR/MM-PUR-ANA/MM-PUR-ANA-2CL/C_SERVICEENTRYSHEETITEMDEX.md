---
name: C_SERVICEENTRYSHEETITEMDEX
description: "Serviceentrysheetitemdex"
semantic_vi: "View Serviceentrysheetitemdex CDS hiển thị dữ liệu chi tiết từ các tờ khai dịch vụ và đơn đặt hàng, cho phép các nhà phát triển phân tích và trích xuất thông tin liên quan đến dịch vụ. Nó được sử dụng trong thành phần MM-PUR-ANA-2CL cho phân tích nguồn cung và quản lý mua hàng."
keywords:
  - "service entry sheet"
  - "đơn dịch vụ"
  - "đơn đặt hàng"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "mm-pur-ana-2cl"
  - "sourcing & procurement"
  - "sourcing"
  - "procurement"
  - "service-related"
  - "dịch vụ"
semantic_en: "The Serviceentrysheetitemdex CDS view exposes item-level data from service entry sheets and purchase orders, allowing developers to analyze and extract service-related information. It is used in the MM-PUR-ANA-2CL component for sourcing and procurement analysis."
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
  - service
  - item-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SERVICEENTRYSHEETITEMDEX

**Serviceentrysheetitemdex**

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
| `ServiceEntrySheet` | ✓ | |  |  |  |  |
| `ServiceEntrySheetItem` | ✓ | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `Service` |  | |  |  |  |  |
| `ServiceEntrySheetItemDesc` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `ConfirmedQuantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `ServicePerformanceDate` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `PurgDocItemExternalReference` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_ServiceEntrySheetDEX` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_AccountAssignmentCategory` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_PurchaseOrder` | | ✓ | | | | |
| `_PurchaseOrderItem` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ServiceEntrySheet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceEntrySheetDEX` | `C_ServiceEntrySheetDEX` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_AccountAssignmentCategory` | `I_AccountAssignmentCategory` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_PurchaseOrder` | `C_PurchaseOrderDEX` | [1..1] |
| `_PurchaseOrderItem` | `C_PurchaseOrderItemDEX` | [1..1] |
| `_PurchaseContract` | `C_PurchaseContractDEX` | [0..1] |
| `_PurchaseContractItem` | `C_PurchaseContractItemDEX` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSERVENTSHTITM'
@EndUserText.label: 'Data Extraction for ServiceEntrySheetItem'
@AbapCatalog.compiler.compareFilter     : true
@AbapCatalog.preserveKey                : true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #REQUIRED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

//@ObjectModel.representativeKey          : [ 'ServiceEntrySheetItem' ]
@VDM.viewType                           : #CONSUMPTION
@Metadata.ignorePropagatedAnnotations   : true

//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'mmpur_ses_item', role: #MAIN,
                        viewElement     : [ 'ServiceEntrySheet', 'ServiceEntrySheetItem' ],
                        tableElement    :   ['ServiceEntrySheet','ServiceEntrySheetItem']
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'ServiceEntrySheetItem'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_ServiceEntrySheetItemDEX
  as select from I_ServiceEntrySheetItemAPI01

  association [1..1] to C_ServiceEntrySheetDEX      as _ServiceEntrySheetDEX      on $projection.ServiceEntrySheet = _ServiceEntrySheetDEX.ServiceEntrySheet
  
  association [0..1] to I_Product                   as _Product                   on $projection.Service = _Product.Product
  
  association [0..1] to I_AccountAssignmentCategory as _AccountAssignmentCategory on $projection.AccountAssignmentCategory = _AccountAssignmentCategory.AccountAssignmentCategory
  
  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure             on $projection.QuantityUnit = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_Currency                  as _DocumentCurrency          on $projection.Currency = _DocumentCurrency.Currency
  
  association [1..1] to C_PurchaseOrderDEX          as _PurchaseOrder             on $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder
  
  association [1..1] to C_PurchaseOrderItemDEX      as _PurchaseOrderItem         on $projection.PurchaseOrder = _PurchaseOrderItem.PurchaseOrder
                                                                                  and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
  
  association [0..1] to C_PurchaseContractDEX       as _PurchaseContract          on $projection.PurchaseContract = _PurchaseContract.PurchaseContract
  
  association [0..1] to C_PurchaseContractItemDEX   as _PurchaseContractItem      on $projection.PurchaseContract = _PurchaseContractItem.PurchaseContract
                                                                                  and $projection.PurchaseContractItem = _PurchaseContractItem.PurchaseContractItem

  association [0..1] to I_PurchasingOrganization    as _PurchasingOrganization    on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [0..1] to I_PurchasingGroup           as _PurchasingGroup           on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [0..1] to I_Plant                     as _Plant                     on $projection.Plant = _Plant.Plant

{

  key ServiceEntrySheet              as ServiceEntrySheet,

  key ServiceEntrySheetItem          as ServiceEntrySheetItem,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseOrder'
      PurchaseOrder                  as PurchaseOrder,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseOrderItem'
      PurchaseOrderItem              as PurchaseOrderItem,

      @Semantics.booleanIndicator : true
      IsDeleted                      as IsDeleted,
      
      @ObjectModel.foreignKey.association: '_Product'
      Service                        as Service,

      ServiceEntrySheetItemDesc      as ServiceEntrySheetItemDesc,

      ServicePerformer               as ServicePerformer,
      
      @ObjectModel.foreignKey.association: '_AccountAssignmentCategory'
      AccountAssignmentCategory      as AccountAssignmentCategory,

      MultipleAcctAssgmtDistribution as MultipleAcctAssgmtDistribution,
      
      @Semantics.text: true
      WorkItem                       as WorkItem,

      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ConfirmedQuantity              as ConfirmedQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      QuantityUnit                   as QuantityUnit,
      
      ServicePerformanceDate         as ServicePerformanceDate,

      //OriginObject                   as OriginObject,       // GFN ATC Error in underlying API IView.

      @Semantics.amount.currencyCode: 'Currency'
      NetAmount                      as NetAmount,

      @Semantics.amount.currencyCode: 'Currency'
      NetPriceAmount                 as NetPriceAmount,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      Currency                       as Currency,

      PurgDocItemExternalReference   as PurgDocItemExternalReference,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContract'
      PurchaseContract               as PurchaseContract,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContractItem'
      PurchaseContractItem           as PurchaseContractItem,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization         as PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup                as PurchasingGroup,
      
      @ObjectModel.foreignKey.association: '_Plant'
      Plant                          as Plant,

      @Semantics.booleanIndicator : true
      IsEndOfPurposeBlocked          as IsEndOfPurposeBlocked,
      
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime               as CreationDateTime,
      
      @Semantics.user.createdBy: true
      CreatedByUser                  as CreatedByUser,
      
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime             as LastChangeDateTime,
      
      @Semantics.user.lastChangedBy: true
      LastChangedByUser              as LastChangedByUser,

      /* Associations */
      _Product,
      _AccountAssignmentCategory,
      _UnitOfMeasure,
      _DocumentCurrency,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _PurchaseContract,
      _PurchaseContractItem,
      _PurchasingOrganization,
      _PurchasingGroup,
      _Plant,
      
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT]
      _ServiceEntrySheetDEX,
      
      _ServiceEntrySheet

}
```
