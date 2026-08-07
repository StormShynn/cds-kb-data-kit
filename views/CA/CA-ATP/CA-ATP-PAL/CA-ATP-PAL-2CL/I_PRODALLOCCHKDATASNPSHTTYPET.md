---
name: I_PRODALLOCCHKDATASNPSHTTYPET
description: "Prodallocchkdatasnpshttypet"
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `ProdAllocChkDataSnapshotType` | ✓ | |  | `cast( substring( domvalue_l, 1, 2 ) as prodallocchkdatasnapshottype preserving type )` |  |  |
| `ProdAllocChkDataSnpshtTypeDesc` |  | |  | `cast( ddtext as prodallocchkdatasnpshttypedesc preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
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
