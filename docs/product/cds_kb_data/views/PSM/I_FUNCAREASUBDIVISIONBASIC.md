---
name: I_FUNCAREASUBDIVISIONBASIC
description: "Functional Area Subdivision ID"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONBASIC')/$value
semantic_en: "Functional Area Subdivision ID"
semantic_vi: "Functional Area Subdivision ID — CDS view cơ bản dựa trên I_FndsMgmtSubdivisionID."
keywords:
  - "functional"
  - "area"
  - "subdivision"
  - "fnds"
  - "mgmt"
  - "acct"
  - "assgmt"
  - "element"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNCAREASUBDIVISIONBASIC

**Functional Area Subdivision ID**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaSubdivisionID` | ✓ | |  | `cast ( FndsMgmtSubdivisionID as fmis_subdiv_fa_subdivid preserving type )` | `CHAR(10)` | Functional Area Subdivision ID |
| `FndsMgmtAcctAssgmtElementID` |  | |  |  | `CHAR(1)` | Account Assignment Element |
| `_FndsMgmtAcctAssgmtElementID` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREASUBDIVISIONBASIC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREASUBB'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling: {
  algorithm: #SESSION_VARIABLE,
  type: #CLIENT_DEPENDENT
 }
@AccessControl.authorizationCheck: #CHECK
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { 
  internalName: #LOCAL,
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel: {
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'FunctionalAreaSubdivisionID',
  sapObjectNodeType: {
    name: 'FunctionalAreaSubdivisionID'
  },  
  supportedCapabilities: [ 
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.allowExtensions:true
@Search.searchable: true
@EndUserText.label: 'Functional Area Subdivision ID'
define view I_FuncAreaSubdivisionBasic
  as select from I_FndsMgmtSubdivisionID

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast ( FndsMgmtSubdivisionID as fmis_subdiv_fa_subdivid preserving type ) as FunctionalAreaSubdivisionID,
      FndsMgmtAcctAssgmtElementID,

      _FndsMgmtAcctAssgmtElementID
}

where
  FndsMgmtAcctAssgmtElementID = '4'
```
