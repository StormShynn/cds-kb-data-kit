---
name: I_CNSLDTNFINSTMNTITEMGROUP
description: "This CDS view provides access to the master data of the consolidation financial statement item group. This CDS view provides the prerequisites for answering the following business questions: Which consolidation financial statement item groups exist?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUP')/$value
semantic_en: "This CDS view provides access to the master data of the consolidation financial statement item group. This CDS view provides the prerequisites for answering the following business questions: Which consolidation financial statement item groups exist?"
semantic_vi: "Financial Statement Item Group — CDS view giao diện dựa trên dd07l."
keywords:
  - "financial"
  - "statement"
  - "item"
  - "group"
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
# I_CNSLDTNFINSTMNTITEMGROUP

**This CDS view provides access to the master data of the consolidation financial statement item group. This CDS view provides the prerequisites for answering the following business questions: Which consolidation financial statement item groups exist?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementItemGroup` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFinStmntItemGroupT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMGROUP')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSITMGRP',
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
@EndUserText.label: 'Financial Statement Item Group'

define view I_CnsldtnFinStmntItemGroup
  as select from dd07l

  association [0..*] to I_CnsldtnFinStmntItemGroupT as _Text on $projection.FinancialStatementItemGroup = _Text.FinancialStatementItemGroup
{
      @ObjectModel.text.association: '_Text'
  key domvalue_l as FinancialStatementItemGroup,

      _Text
}
where
      dd07l.domname  = 'FC_ITUSE'
  and dd07l.as4local = 'A';
```
