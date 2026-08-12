---
name: I_FUNDAUTHZNGRPTEXT
description: "Fund Authorization Groups - Text"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRPTEXT')/$value
semantic_en: "Fund Authorization Groups - Text"
semantic_vi: "Fund Authorization Groups - Text — CDS view giao diện (master data) dựa trên fmc_d_authgrpt."
keywords:
  - "fund"
  - "authorization"
  - "groups"
  - "text"
  - "authzn"
  - "language"
tags:
  - PSM
  - bo:project
  - component:PSM-FM-MD
  - interface-view
  - PSM-FM
  - PSM-FM-MD
---
# I_FUNDAUTHZNGRPTEXT

**Fund Authorization Groups - Text**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FundAuthznGrp` | ✓ | |  | `authgr` | `CHAR(10)` | Authorization Group |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `FundAuthznGrpText` |  | |  | `authgr_text` | `CHAR(20)` | Authorization Group Description |
| `_Language` | | ✓ | | | | |
| `_FundAuthznGrp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FundAuthznGrp` | `I_FundAuthznGrp` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDAUTHZNGRPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IAUTHGRPFUTXT'
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@EndUserText.label: 'Fund Authorization Groups - Text'

@VDM.viewType: #BASIC
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
       representativeKey: 'FundAuthznGrp',
       usageType: {
            dataClass: #MASTER,
            serviceQuality: #A,
            sizeCategory: #L
     },
     dataCategory: #TEXT,
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}

@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_FundAuthznGrpText
  as select from fmc_d_authgrpt
  association [1..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_FundAuthznGrp as _FundAuthznGrp on $projection.FundAuthznGrp = _FundAuthznGrp.FundAuthznGrp
{
      @ObjectModel.foreignKey.association: '_FundAuthznGrp'
  key authgr                                                 as FundAuthznGrp,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                                               as Language,

      @Semantics.text: true
      authgr_text                                            as FundAuthznGrpText,

      _Language,
      _FundAuthznGrp

}
where
  auth_object = 'FU'
```
