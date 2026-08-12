---
name: I_SUBLEDGERACCLINEITEMTYPET
description: "Subledgeracclineitemtypet"
app_component: FI-GL-GL-A-2CL
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
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - item-level
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_SUBLEDGERACCLINEITEMTYPET

**Subledgeracclineitemtypet**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `SubLedgerAcctLineItemType` | ✓ | |  | `slalittype` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `SubLedgerAcctLineItemTypeName` |  | |  | `cast( finsts_slalittyt.description as fis_slalittype_desc)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED                            
@Analytics: { dataExtraction.enabled: true  }
@EndUserText.label: 'Subledger Account Line Item Type - Text'
@ObjectModel: { representativeKey: 'SubLedgerAcctLineItemType',
                dataCategory: #TEXT,
                usageType: { sizeCategory: #S,
                            dataClass:  #MASTER,
                            serviceQuality: #A },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }
@Analytics.technicalName: 'IFISLACCLITYPT'  
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM: {lifecycle.contract.type: #PUBLIC_LOCAL_API,
       viewType: #BASIC }
       
define view entity I_SubLedgerAccLineItemTypeT
  as select from finsts_slalittyt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key finsts_slalittyt.slalittype                                as SubLedgerAcctLineItemType,
      @Semantics.language
  key finsts_slalittyt.langu                                     as Language,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast( finsts_slalittyt.description as fis_slalittype_desc) as SubLedgerAcctLineItemTypeName,

      _Language
}
```
