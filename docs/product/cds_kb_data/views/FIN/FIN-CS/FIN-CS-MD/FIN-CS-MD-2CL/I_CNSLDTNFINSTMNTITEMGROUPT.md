---
name: I_CNSLDTNFINSTMNTITEMGROUPT
description: "Financial Statement Item Group - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUPT')/$value
semantic_en: "Financial Statement Item Group - Text"
semantic_vi: "Financial Statement Item Group - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "financial"
  - "statement"
  - "item"
  - "group"
  - "text"
  - "language"
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
# I_CNSLDTNFINSTMNTITEMGROUPT

**Financial Statement Item Group - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUPT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` | `LANG(1)` | Language Key |
| `FinancialStatementItemGroup` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `FinancialStatementItemGroupTxt` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUPT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUPT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSITMGRPT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #META,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'FinancialStatementItemGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,                                    
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Financial Statement Item Group - Text'

define view I_CnsldtnFinStmntItemGroupT
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(ddlanguage as spras) as Language,

  key domvalue_l                as FinancialStatementItemGroup,

      @Semantics.text
      ddtext                    as FinancialStatementItemGroupTxt,

      _Language
}
where
      domname  = 'FC_ITUSE'
  and as4local = 'A';
```
