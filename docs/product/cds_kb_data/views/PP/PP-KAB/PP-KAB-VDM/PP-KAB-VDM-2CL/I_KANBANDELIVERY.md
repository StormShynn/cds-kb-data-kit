---
name: I_KANBANDELIVERY
description: "Kanbandelivery"
app_component: PP-KAB-VDM-2CL
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
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - delivery
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANDELIVERY

**Kanbandelivery**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
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
| `KanbanContainer` | ✓ | |  | `pkkey` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `CustomerReferenceNumber` |  | |  | `bstkd` |  |  |
| `DeliveryDocument` |  | |  | `vlien` |  |  |
| `DeliveryDocumentItem` |  | |  | `vliep` |  |  |
| `Plant` |  | | `_KanbanContainer` | `Plant` |  |  |
| `Supplier` |  | | `_KanbanContainer` | `Supplier` |  |  |
| `_KanbanContainer` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompanyByPlant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanContainer` | `I_KanbanContainer` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompanyByPlant` | `I_CustomerCompanyByPlant` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANDEL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Delivery'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #L, dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@Search.searchable: true

define view I_KanbanDelivery
  as select from pksd
  association [1..1] to I_KanbanContainer        as _KanbanContainer        on  $projection.KanbanContainer = _KanbanContainer.KanbanContainer
  association [0..1] to I_Customer               as _Customer               on  $projection.SoldToParty = _Customer.Customer
  association [0..1] to I_CustomerCompanyByPlant as _CustomerCompanyByPlant on  $projection.SoldToParty = _CustomerCompanyByPlant.Customer
                                                                            and $projection.plant       = _CustomerCompanyByPlant.Plant
  association [0..1] to I_Supplier               as _Supplier               on  $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant on  $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                            and $projection.plant    = _SupplierCompanyByPlant.Plant
{
      @ObjectModel.foreignKey.association: '_KanbanContainer'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key pkkey  as KanbanContainer,
      @ObjectModel.foreignKey.association: '_Customer'
      kunnr  as SoldToParty,
      bstkd  as CustomerReferenceNumber,
      vlien  as DeliveryDocument,
      vliep  as DeliveryDocumentItem,
      _KanbanContainer.Plant, // for ACL
      _KanbanContainer,
      _Customer,
      
      // Only for DCL
      @Consumption.hidden: true
      _CustomerCompanyByPlant,

      @Consumption.hidden: true
      _KanbanContainer.Supplier,
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant

}
```
