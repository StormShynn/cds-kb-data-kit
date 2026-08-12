---
name: I_CNSLDTNFINSTMNTITMCATTEXT
description: "Financial Statement Item Category - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCATTEXT')/$value
semantic_en: "Financial Statement Item Category - Text"
semantic_vi: "Financial Statement Item Category - Text — CDS view giao diện dựa trên tf106."
keywords:
  - "financial"
  - "statement"
  - "item"
  - "category"
  - "text"
  - "language"
  - "type"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNFINSTMNTITMCATTEXT

**Financial Statement Item Category - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementItemCategory` | ✓ | |  | `ittyp` | `CHAR(1)` | FS Item Category |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `FinancialStatementItemTypeText` |  | |  | `txt` | `CHAR(30)` | Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCATTEXT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNFSCATT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1 }
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S },
  representativeKey: 'FinancialStatementItemCategory',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,                                    
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Financial Statement Item Category - Text'

define view I_CnsldtnFinStmntItmCatText
  as select from tf106

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key ittyp as FinancialStatementItemCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu as Language,

      //  ittyp as CnsldtnFinStmntItmCategory,
      @Semantics.text
      txt   as FinancialStatementItemTypeText,
      //  txt as CnsldtnFinStmntItmTypeText,

      _Language
};
```
