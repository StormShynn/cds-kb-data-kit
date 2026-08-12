---
name: I_PRMTHBRPLDPOWRKFLWCARD
description: "Prmthbrpldpowrkflwcard"
app_component: MM-PUR-HUB-PO-2CL
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
  - MM-PUR-HUB
  - interface-view
  - workflow
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PRMTHBRPLDPOWRKFLWCARD

**Prmthbrpldpowrkflwcard**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PO-2CL` |
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
| `ExtSourceSystem` | ✓ | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PurchaseOrderNetAmount` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  | `cast (PurchaseOrder.PurchasingOrganization as ekorg_ll preserving type )` |  |  |
| `ProcmtHubSupplierName` |  | |  | `case when _ProcmtHubSupplier.ProcmtHubSupplierName = '' or _ProcmtHubSupplier.ProcmtHubSupplierName is null then PurchaseOrder.Supplier else _ProcmtHubSupplier.ProcmtHubSupplierName end` |  |  |
| `PurchasingGroupName` |  | |  | `case when _PurchasingGrp.PurchasingGroupName = '' or _PurchasingGrp.PurchasingGroupName is null then PurchaseOrder.PurchasingGroup else _PurchasingGrp.PurchasingGroupName end` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingGrp` | `I_ProcmtHubPurgGroup` | [0..1] |
| `_ProcmtHubSupplier` | `I_ProcmtHubSupplier` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCHBPOWRKFLCRD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'ToDo Workflow Card info of MPOC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern : #NONE
@Workflow: { enabledFor: [ #CUSTOM_TASK_ATTRIBUTES ] }
define view I_PrmtHbRpldPOWrkflwCard
  as select from I_CentralPurchaseOrder as PurchaseOrder

  association [0..1] to I_ProcmtHubPurgGroup         as _PurchasingGrp      on  _PurchasingGrp.ProcmtHubPurchasingGroup   = $projection.PurchasingGroup
                                                                                        and _PurchasingGrp.ProcurementHubSourceSystem = $projection.ExtSourceSystem

  association [0..1] to I_ProcmtHubSupplier          as _ProcmtHubSupplier          on  _ProcmtHubSupplier.ProcmtHubFixedSupplier     = $projection.Supplier
                                                                                        and _ProcmtHubSupplier.ProcurementHubSourceSystem = $projection.ExtSourceSystem
{
    key PurchaseOrder,
    key ExtSourceSystem,
    PurchaseOrderType,
    PurchasingGroup,
    CompanyCode,
    Supplier,
    @Semantics: { currencyCode: true }
    DocumentCurrency,
    @Semantics: { amount.currencyCode: 'DocumentCurrency' }
    PurchaseOrderNetAmount,
//    @EndUserText.label: 'Net Purchase Order Price'
//    cast ( concat_with_space( cast ( PurchaseOrderNetAmount as char18),  DocumentCurrency, 1) as char24) as NetPOAmount, 
    PurchaseOrder.PurchaseOrderDate,
    cast (PurchaseOrder.PurchasingOrganization as ekorg_ll preserving type )
                                                                                               as PurchasingOrganization,
    case  when _ProcmtHubSupplier.ProcmtHubSupplierName = '' or _ProcmtHubSupplier.ProcmtHubSupplierName is null then PurchaseOrder.Supplier
              else _ProcmtHubSupplier.ProcmtHubSupplierName
              end as ProcmtHubSupplierName,
    case  when _PurchasingGrp.PurchasingGroupName = '' or _PurchasingGrp.PurchasingGroupName is null then PurchaseOrder.PurchasingGroup
              else _PurchasingGrp.PurchasingGroupName
              end as PurchasingGroupName
}
```
