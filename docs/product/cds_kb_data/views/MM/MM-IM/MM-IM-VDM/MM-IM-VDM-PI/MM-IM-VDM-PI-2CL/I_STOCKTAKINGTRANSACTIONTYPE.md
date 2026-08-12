---
name: I_STOCKTAKINGTRANSACTIONTYPE
description: "Stocktakingtransactiontype"
app_component: MM-IM-VDM-PI-2CL
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
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_STOCKTAKINGTRANSACTIONTYPE

**Stocktakingtransactiontype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
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
| `InventoryTransactionType` | ✓ | |  |  |  |  |
| `IsPhysicalInventoryRelevant` |  | |  |  |  |  |
| `IsMaterialDocumentRelevant` |  | |  |  |  |  |
| `IsReservationRelevant` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Trans Types For Invtry and Stk Taking'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                representativeKey: 'InventoryTransactionType',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      } 
@Analytics: { 
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              technicalName: 'ISTCKTKNGTRNSTYP'
            }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_StockTakingTransactionType as select from I_InventoryTransactionType {
      @ObjectModel.text.association: '_Text'
  key InventoryTransactionType,
-- the next 3 fields are only listed because this view replaces I_InventoryTransactionType in associations in two C1 released views
      IsPhysicalInventoryRelevant,
      IsMaterialDocumentRelevant,
      IsReservationRelevant,
      _Text
}
where IsPhysicalInventoryRelevant = 'X'
```
