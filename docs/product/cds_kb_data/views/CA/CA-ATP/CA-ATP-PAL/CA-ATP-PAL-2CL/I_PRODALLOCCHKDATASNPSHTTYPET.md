---
name: I_PRODALLOCCHKDATASNPSHTTYPET
description: "Prodallocchkdatasnpshttypet"
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
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_PRODALLOCCHKDATASNPSHTTYPET

**Prodallocchkdatasnpshttypet**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `ProdAllocChkDataSnapshotType` | ✓ | |  | `cast( substring( domvalue_l, 1, 2 ) as prodallocchkdatasnapshottype preserving type )` | `CHAR(2)` | Product Allocation Check Data Snapshot Type |
| `ProdAllocChkDataSnpshtTypeDesc` |  | |  | `cast( ddtext as prodallocchkdatasnpshttypedesc preserving type )` | `CHAR(60)` | Product Allocation Check Data Snapshot Type Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_ProdAllocChkDataSnpshtType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Check Data Snapshot Type - Text' 
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPACHKSNPSHTT'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
//@Analytics.dataCategory: #TEXT // does not exist any more, do not replace it with #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'ProdAllocChkDataSnapshotType'
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
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
@Search.searchable: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view entity I_ProdAllocChkDataSnpshtTypeT  
   as select from dd07t
   association to parent I_ProdAllocChkDataSnpshtType as _ProdAllocChkDataSnpshtType 
      on $projection.ProdAllocChkDataSnapshotType = _ProdAllocChkDataSnpshtType.ProdAllocChkDataSnapshotType
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language
    key cast( ddlanguage as spras preserving type ) as Language,
    @ObjectModel.foreignKey.association: '_ProdAllocChkDataSnpshtType'
    @ObjectModel.text.element: ['ProdAllocChkDataSnpshtTypeDesc']
    key cast( substring( domvalue_l, 1, 2 ) as prodallocchkdatasnapshottype preserving type ) as ProdAllocChkDataSnapshotType,
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    @Search.fuzzinessThreshold: 0.8
    @Semantics.text
    cast( ddtext as prodallocchkdatasnpshttypedesc preserving type ) as ProdAllocChkDataSnpshtTypeDesc, 
    @Analytics.hidden: true
    @Consumption.hidden: true
    domvalue_l as DomainValue,
    _ProdAllocChkDataSnpshtType,
    _Language 
}
where domname  = 'PRODALLOCCHKDATASNAPSHOTTYPE' 
  and as4local = 'A'
  and as4vers  = '0000'
```
