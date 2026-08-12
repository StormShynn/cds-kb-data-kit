---
name: I_JOINTVENTURERECOVERYTEXT
description: "This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?"
semantic_vi: "Joint Venture Recovery - Text — CDS view giao diện dựa trên t8jjt."
keywords:
  - "joint"
  - "venture"
  - "recovery"
  - "text"
  - "company"
  - "code"
  - "language"
  - "name"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_JOINTVENTURERECOVERYTEXT

**This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JointVentureRecoveryCode` | ✓ | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `JointVentureRecoveryCodeName` |  | |  | `ttext` | `CHAR(35)` | Recovery Indicator Description |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYTEXT')/$value)*

```abap
@EndUserText.label: 'Joint Venture Recovery - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IFIJVRT'
@ObjectModel.representativeKey: 'JointVentureRecoveryCode'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT]
define view I_JointVentureRecoveryText
  as select from t8jjt
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs     as CompanyCode,
  key recid     as JointVentureRecoveryCode,
      @Semantics.language: true
  key spras     as Language,
      @Semantics.text: true
      ttext     as JointVentureRecoveryCodeName,

      _Language,
      _CompanyCode
}
```
