---
name: I_CNSLDTNUNITT
description: "Consolidation Unit - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITT')/$value
semantic_en: "Consolidation Unit - Text"
semantic_vi: "Consolidation Unit - Text — CDS view giao diện dựa trên tf161."
keywords:
  - "consolidation"
  - "unit"
  - "text"
  - "dimension"
  - "language"
tags:
  - FIN
  - bo:salesorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNUNITT

**Consolidation Unit - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` | ✓ | |  | `dimen` | `CHAR(2)` | Dimension |
| `ConsolidationUnit` | ✓ | |  | `cast( bunit as fincs_consolidationunit preserving type )` | `CHAR(18)` | Consolidation Unit |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `ConsolidationUnitText` |  | |  | `cast( txtsh as rstxtsh )` | `CHAR(20)` | Short description |
| `ConsolidationUnitMdmText` |  | |  | `cast( txtmi as rstxtmd )` | `CHAR(40)` | Medium description |
| `LongText` |  | |  | `cast( txtmi as rstxtlg )` | `CHAR(60)` | Long description |
| `_Language` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Dimension` | `I_CnsldtnDimension` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 2 }
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #M },
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

define view I_CnsldtnUnitT
  as select from tf161

  association [0..1] to I_Language         as _Language  on $projection.Language = _Language.Language
  association [0..1] to I_CnsldtnDimension as _Dimension on $projection.ConsolidationDimension = _Dimension.ConsolidationDimension
{

      @ObjectModel.foreignKey.association: '_Dimension'
  key dimen                                                    as ConsolidationDimension,

  key cast( bunit as fincs_consolidationunit preserving type ) as ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu                                                    as Language,

      @Semantics.text
      cast( txtsh as rstxtsh )                                 as ConsolidationUnitText,

      @Semantics.text
      cast( txtmi as rstxtmd )                                 as ConsolidationUnitMdmText,

      @Semantics.text
      cast( txtmi as rstxtlg )                                 as LongText,

      _Dimension,

      _Language
}
where
  dimen = 'Y1'
```
