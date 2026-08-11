---
name: I_CNSLDTNFINSTMNTITMCAT
description: "This CDS view provides access to the master data of the consolidation financial statement item category. This CDS view provides the prerequisites for answering the following business questions: Which consolidation financial statement item categories do exist?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCAT')/$value
semantic_en: "This CDS view provides access to the master data of the consolidation financial statement item category. This CDS view provides the prerequisites for answering the following business questions: Which consolidation financial statement item categories do exist?"
semantic_vi: "Financial Statement Item Category — CDS view giao diện dựa trên tf105."
keywords:
  - "financial"
  - "statement"
  - "item"
  - "category"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - bo:companycode
---
# I_CNSLDTNFINSTMNTITMCAT

**This CDS view provides access to the master data of the consolidation financial statement item category. This CDS view provides the prerequisites for answering the following business questions: Which consolidation financial statement item categories do exist?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementItemCategory` | ✓ | |  | `ittyp` | `CHAR(1)` | FS Item Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFinStmntItmCatText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITMCAT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNFSCAT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL }
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'FinancialStatementItemCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,                                    
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION]
}
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Financial Statement Item Category'

define view I_CnsldtnFinStmntItmCat
  as select from tf105

  association [0..*] to I_CnsldtnFinStmntItmCatText as _Text on $projection.FinancialStatementItemCategory = _Text.FinancialStatementItemCategory
{

      @ObjectModel.text.association: '_Text'
  key ittyp as FinancialStatementItemCategory,

      _Text
};
```
