---
name: I_PRODALLOCLIFECYCLESTATUST
description: "Prodalloclifecyclestatust"
app_component: CA-ATP-PAL-2CL
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
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - status
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_PRODALLOCLIFECYCLESTATUST

**Prodalloclifecyclestatust**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
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
| `ProdAllocationLifecycleStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as prodallocationlifecyclestatus preserving type )` | `CHAR(2)` | Product Allocation Lifecycle Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ProdAllocLifecycleStatusDesc` |  | |  | `cast( ddtext as prodalloclifecyclestatusdesc preserving type )` | `CHAR(60)` | Product Allocation Lifecycle Status Description |
| `_Language` | | ✓ | | | | |
| `_ProdAllocLifecycleStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ProdAllocLifecycleStatus` | `I_ProdAllocLifecycleStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Lifecycle Status - Text' //same as DDL description
//@Analytics.dataCategory: #TEXT
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProdAllocationLifecycleStatus'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'IPALIFECYCLESTST'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_ProdAllocLifecycleStatusT
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_ProdAllocLifecycleStatus as _ProdAllocLifecycleStatus 
      on $projection.ProdAllocationLifecycleStatus = _ProdAllocLifecycleStatus.ProdAllocationLifecycleStatus
{
    @ObjectModel.foreignKey.association: '_ProdAllocLifeCycleStatus'
    key cast ( substring( domvalue_l, 1, 2 ) as prodallocationlifecyclestatus preserving type ) as ProdAllocationLifecycleStatus,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as prodalloclifecyclestatusdesc preserving type ) as ProdAllocLifecycleStatusDesc,

    _ProdAllocLifecycleStatus, //decomment only if no problems in analytics
    _Language 
}
where domname  = 'PRODALLOCATIONLIFECYCLESTATUS' 
  and as4local = 'A'
```
