---
name: I_BUSPARTAUTHORIZATIONGROUPTXT
description: "Business Partner Authorization Group Txt"
app_component: AP-MD-BP-RAP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUPTXT')/$value
semantic_en: "Business Partner Authorization Group Txt"
semantic_vi: "Business Partner Authorization Group Txt — CDS view giao diện dựa trên tb037t."
keywords:
  - "business"
  - "partner"
  - "authorization"
  - "group"
  - "txt"
  - "language"
  - "object"
  - "name"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - AP-MD-BP-RAP
  - component:AP-MD-BP-RAP
  - interface-view
---
# I_BUSPARTAUTHORIZATIONGROUPTXT

**Business Partner Authorization Group Txt**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUPTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AuthorizationObject` | ✓ | |  | `auobj` | `CHAR(10)` | Authorization Group Object |
| `AuthorizationGroup` | ✓ | |  | `augrp` | `CHAR(4)` | Authorization Group |
| `AuthorizationGroupName` |  | |  | `bez50` | `CHAR(50)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUPTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSPARTAUTHORIZATIONGROUPTXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBPAUTHGRPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AuthorizationGroup'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Business Partner Authorization Group Txt'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
define view I_BusPartAuthorizationGroupTxt
  as select from tb037t
{
      @Semantics.language: true
  key spras as Language,
  key auobj as AuthorizationObject,
  key augrp as AuthorizationGroup,
      @Semantics.text: true
      @EndUserText.label: 'Authorization Group Description'
      @Search : { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      bez50 as AuthorizationGroupName
}
```
