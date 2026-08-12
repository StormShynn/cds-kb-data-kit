---
name: I_CNSLDTNUNITTEXT_3
description: "Cnsldtnunittext 3"
app_component: FIN-CS-MD-2CL
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
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITTEXT_3

**Cnsldtnunittext 3**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `Language` | ✓ | | `_fincs_bunitt` | `langu` |  |  |
| `ConsolidationUnit` | ✓ | | `_fincs_bunitt` | `bunit` |  |  |
| `ConsolidationDimension` |  | | `_fincs_bunitt` | `dimen` |  |  |
| `ConsolidationUnitText` |  | |  | `cast ( _fincs_bunitt.txtsh as fincs_bunit_short_text preserving type )` |  |  |
| `ConsolidationUnitMdmText` |  | |  | `cast ( _fincs_bunitt.txtmi as fincs_bunit_medium_text preserving type )` |  |  |
| `ConsolidationUnitLongText` |  | | `_fincs_bunitt` | `txtlg` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnDimension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CnsldtnDimension` | `I_CnsldtnDimension` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCONSUNITT3',
  compiler.compareFilter: true,
  preserveKey: true
  }
@ClientHandling: {
  type:      #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE
}
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
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
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Unit - Text'

@VDM.lifecycle:{
  status: #DEPRECATED,
  successor: 'I_CnsldtnUnitText_4'
  }

define view I_CnsldtnUnitText_3
  as select from fincs_bunitt as _fincs_bunitt

  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnDimension as _CnsldtnDimension on $projection.ConsolidationDimension = _CnsldtnDimension.ConsolidationDimension

{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key _fincs_bunitt.langu                                                     as Language,

  key _fincs_bunitt.bunit                                                     as ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_CnsldtnDimension'
      _fincs_bunitt.dimen                                                     as ConsolidationDimension,

      @Semantics.text
      cast ( _fincs_bunitt.txtsh as fincs_bunit_short_text preserving type )  as ConsolidationUnitText,

      @Semantics.text
      cast ( _fincs_bunitt.txtmi as fincs_bunit_medium_text preserving type ) as ConsolidationUnitMdmText,

      @Semantics.text
      _fincs_bunitt.txtlg                                                     as ConsolidationUnitLongText,


      // association
      _Language, // required for value help retrieval

      _CnsldtnDimension // required for value help retrieval

}
where
  dimen = 'Y1'
```
