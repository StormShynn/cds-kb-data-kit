---
name: I_MFGBOOMATERIALASSGMTCHGST
description: "Mfgboomaterialassgmtchgst"
app_component: PP-VDM-MD-2CL
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
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - material
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
  - bo:Material
---
# I_MFGBOOMATERIALASSGMTCHGST

**Mfgboomaterialassgmtchgst**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
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
| `Product` | ✓ | |  | `Material` |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BillOfOperationsType` | ✓ | |  |  |  |  |
| `BillOfOperationsGroup` | ✓ | |  |  |  |  |
| `BillOfOperationsVariant` | ✓ | |  |  |  |  |
| `BOOToMaterialInternalID` | ✓ | |  |  |  |  |
| `BOOMatlInternalVersionCounter` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsImplicitlyDeleted` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `BOOSearchText` |  | |  |  |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BOOMaterialAssignment` | | ✓ | | | | |
| `_WBSElementInternal` | | ✓ | | | | |
| `_WBSElementBasic` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductPlant2` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_CustomerCompanyByPlant` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BOOMaterialAssignment` | `I_MfgBOOMaterialAssignment` | [1..1] |
| `_WBSElementInternal` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasic` | `I_WBSElementBasicData` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductPlant` | `I_ProductPlant` | [1..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [1..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_CustomerCompanyByPlant` | `I_CustomerCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOMATASGNCS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOMatlInternalVersionCounter'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Change State of Material Assgmt to Manufacturing BOO'

define view I_MfgBOOMaterialAssgmtChgSt
  as select from I_BOOMaterialAssgmtChangeState as mapl

  -- to Root
  association [1..1] to I_MfgBillOfOperations      as _BillOfOperations       on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                              and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                              and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  -- to Parent
  association [1..1] to I_MfgBOOMaterialAssignment as _BOOMaterialAssignment  on  $projection.Plant                   = _BOOMaterialAssignment.Plant
                                                                              and $projection.Product                 = _BOOMaterialAssignment.Product
                                                                              and $projection.BillOfOperationsType    = _BOOMaterialAssignment.BillOfOperationsType
                                                                              and $projection.BillOfOperationsGroup   = _BOOMaterialAssignment.BillOfOperationsGroup
                                                                              and $projection.BillOfOperationsVariant = _BOOMaterialAssignment.BillOfOperationsVariant
                                                                              and $projection.BOOToMaterialInternalID = _BOOMaterialAssignment.BOOToMaterialInternalID

  association [0..1] to I_WBSElementBasicData      as _WBSElementInternal     on  $projection.WBSElementInternalID   = _WBSElementInternal.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData      as _WBSElementBasic        on  $projection.WBSElementInternalID_2 = _WBSElementBasic.WBSElementInternalID
  association [1..1] to I_Product                  as _Product                on  $projection.Product = _Product.Product
  association [1..1] to I_ProductPlant             as _ProductPlant           on  $projection.Product = _ProductPlant.Product
                                                                              and $projection.Plant   = _ProductPlant.Plant
  association [1..1] to I_ProductPlantBasic        as _ProductPlant2          on  $projection.Product = _ProductPlant2.Product
                                                                              and $projection.Plant   = _ProductPlant2.Plant
  -- for DCLS
  association [0..1] to I_SupplierCompanyByPlant   as _SupplierCompanyByPlant on  $projection.Plant    = _SupplierCompanyByPlant.Plant
                                                                              and $projection.Supplier = _SupplierCompanyByPlant.Supplier
  association [0..1] to I_CustomerCompanyByPlant   as _CustomerCompanyByPlant on  $projection.Plant    = _CustomerCompanyByPlant.Plant
                                                                              and $projection.Customer = _CustomerCompanyByPlant.Customer
{
      // Key
      @ObjectModel.foreignKey.association: '_Product'
  key mapl.Material as Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key mapl.Plant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key mapl.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key mapl.BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key mapl.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BOOMaterialAssignment'
  key mapl.BOOToMaterialInternalID,
      -- Representative Key
  key mapl.BOOMatlInternalVersionCounter,

      // Administrative data
      @Semantics.businessDate.from: true
      mapl.ValidityStartDate,
      @Semantics.businessDate.to: true
      mapl.ValidityEndDate,
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      mapl.ChangeNumber,
      @Semantics.systemDate.createdAt: true
      mapl.CreationDate,
      @Semantics.user.createdBy: true
      mapl.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      mapl.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      mapl.LastChangedByUser,

      // Attributes  
      mapl.IsDeleted,
      mapl.IsImplicitlyDeleted,

      // Assignments
      @ObjectModel.foreignKey.association: '_Supplier'
      mapl.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      mapl.Customer,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      mapl.SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      mapl.SalesOrderItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      @ObjectModel.foreignKey.association: '_WBSElementInternal'
      mapl.WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_WBSElementBasic'
      mapl.WBSElementInternalID_2,
      @Semantics.text: true
      mapl.BOOSearchText,

      // Assignments
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      _Plant,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _BOOMaterialAssignment,
      _ChangeMaster,
      _Customer,
      @Consumption.hidden: true
      _CustomerCompanyByPlant,
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      _SalesOrder,
      _SalesOrderItem,
--    @API.element.releaseState: #DEPRECATED
--    @API.element.successor: '_WBSElementBasic'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasic'
      _WBSElementInternal,
      _WBSElementBasic
}
where mapl.BillOfOperationsType = '2'  // Recipe
   or mapl.BillOfOperationsType = 'N'  // Standard routing
   or mapl.BillOfOperationsType = 'S'; // Reference operation set
```
