---
name: I_CNSLDTNUNITTEXT_4
description: "Cnsldtnunittext 4"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITTEXT_4

**Cnsldtnunittext 4**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_fincs_bunitt` | `langu` |  |  |
| `ConsolidationUnit` | ✓ | |  | `cast(_fincs_bunitt.bunit as fincs_consolidationunit preserving type )` |  |  |
| `ConsolidationUnitText` |  | |  | `cast(_fincs_bunitt.txtsh as fincs_consolidationunittext preserving type )` |  |  |
| `ConsolidationUnitMdmText` |  | |  | `cast(_fincs_bunitt.txtmi as fincs_medium_text_30 preserving type )` |  |  |
| `ConsolidationUnitLongText` |  | |  | `cast(_fincs_bunitt.txtlg as fincs_consunitlongtext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [1..1] |

## Source Code

```abap
@Analytics:{
  dataExtraction.enabled: true,
  technicalName: 'ICSCONSUNITT4'
}
@AccessControl.authorizationCheck: #CHECK
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationUnit',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'ConsolidationUnitText'                        
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit - Text'

define view entity I_CnsldtnUnitText_4
  as select from fincs_bunitt as _fincs_bunitt

  association [1..1] to I_Language      as _Language    on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnUnit_4 as _CnsldtnUnit on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _fincs_bunitt.langu                                                       as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnUnit'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
        }
  key cast(_fincs_bunitt.bunit as fincs_consolidationunit preserving type )     as ConsolidationUnit,

      @Search:{
        ranking: #MEDIUM,
        fuzzinessThreshold: 0.8
        }
      @Semantics.text
      cast(_fincs_bunitt.txtsh as fincs_consolidationunittext preserving type ) as ConsolidationUnitText,

      @Semantics.text
      cast(_fincs_bunitt.txtmi as fincs_medium_text_30 preserving type )        as ConsolidationUnitMdmText,

      @Semantics.text
      cast(_fincs_bunitt.txtlg as fincs_consunitlongtext preserving type )      as ConsolidationUnitLongText,


      // association
      _Language, // required for value help retrieval
      _CnsldtnUnit
}
where
  dimen = 'Y1'
```
