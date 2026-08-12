---
name: I_FUNDAUTHZNGRP
description: "Authorization Groups for Fund"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRP')/$value
semantic_en: "Authorization Groups for Fund"
semantic_vi: "Authorization Groups for Fund — CDS view giao diện (master data) dựa trên fmc_d_authgrp."
keywords:
  - "authorization"
  - "groups"
  - "for"
  - "fund"
  - "authzn"
tags:
  - PSM
  - bo:project
  - component:PSM-FM-MD
  - interface-view
  - PSM-FM
  - PSM-FM-MD
---
# I_FUNDAUTHZNGRP

**Authorization Groups for Fund**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FundAuthznGrp` | ✓ | |  | `authgr` | `CHAR(10)` | Authorization Group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FundAuthznGrpText` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRP')/$value)*

```abap
@EndUserText.label: 'Authorization Groups for Fund'

@VDM.viewType: #BASIC
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
       representativeKey: 'FundAuthznGrp',
       usageType: {
            dataClass: #MASTER,
            serviceQuality: #A,
            sizeCategory: #S
     },
     supportedCapabilities: [ #SQL_DATA_SOURCE ]     
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IAUTHGRPFU'
@Search.searchable: true

define view I_FundAuthznGrp
  as select from fmc_d_authgrp
  association [1..1] to I_FundAuthznGrpText as _Text on  $projection.FundAuthznGrp = _Text.FundAuthznGrp
                                                     and _Text.Language            = $session.system_language
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key authgr                                                 as FundAuthznGrp,
      _Text
}
where
  auth_object = 'FU'
```
