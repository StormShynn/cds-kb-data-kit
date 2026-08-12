---
name: I_SECURITIESACCOUNTPARTNER
description: "Securities Account Partner Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPARTNER')/$value
semantic_en: "Securities Account Partner Details"
semantic_vi: "Securities Account Partner Details — CDS view giao diện dựa trên cms_sec_acc_bp."
keywords:
  - "securities"
  - "account"
  - "partner"
  - "details"
  - "object"
  - "func"
  - "share"
  - "nmrtr"
tags:
  - FS
  - account
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - bo:businesspartner
---
# I_SECURITIESACCOUNTPARTNER

**Securities Account Partner Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecuritiesAccountPartnerUUID` | ✓ | |  | `sec_acc_bp_guid` | `RAW(16)` |  Account Business partner guid |
| `SecuritiesAccountObjectUUID` |  | |  | `sec_acc_guid` | `RAW(16)` | GUID for securities account |
| `SecuritiesAccountPartnerID` |  | |  | `cast( bupa_id as cms_dte_bpid_vdm preserving type )` | `CHAR(32)` | Business Partner ID |
| `SecuritiesAccountPartnerFunc` |  | |  | `bpf` | `CHAR(6)` | Business Partner Function |
| `SecuritiesAccountBPShareNmrtr` |  | |  | `bupa_share_nr` | `INT4(10)` | Numerator in Business Partner Share of Securities Account |
| `SecuritiesAccountBPShareDnmntr` |  | |  | `bupa_share_dr` | `INT4(10)` | Denominator in Business Partner Share of Securities Account |
| `SecuritiesAcctBPValdFrmDte` |  | |  | `bp_valid_from` | `DATS(8)` | Date from which Real Estate Value stands Valid |
| `SecuritiesAcctBPValdToDte` |  | |  | `bp_valid_to` | `DATS(8)` | Date unitl which Real Estate Value stands Valid |
| `_SecuritiesAccountObjectData` | | ✓ | | | | |
| `_SecuritiesAccountPosition` | | ✓ | | | | |
| `_SecuritiesAcctObjMstrData` | | ✓ | | | | |
| `_SecuritiesAcctPosMstrData` | | ✓ | | | | |
| `_SecuritiesAccountPartnerFunc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecuritiesAccountObjectData` | `I_SecuritiesAccountObjectData` | [0..1] |
| `_SecuritiesAccountPosition` | `I_SecuritiesAccountPosition` | [0..*] |
| `_SecuritiesAcctObjMstrData` | `I_SecuritiesAcctObjMstrData` | [0..1] |
| `_SecuritiesAcctPosMstrData` | `I_SecuritiesAcctPosMstrData` | [0..*] |
| `_SecuritiesAccountPartnerFunc` | `I_CollateralPartnerFunction` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPARTNER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ISECACCPARTNER',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'SecuritiesAccountPartnerUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Securities Account Partner Details'
define view I_SecuritiesAccountPartner
  as select from cms_sec_acc_bp
  association [0..1] to I_SecuritiesAccountObjectData as _SecuritiesAccountObjectData  on $projection.SecuritiesAccountObjectUUID = _SecuritiesAccountObjectData.SecuritiesAccountObjectUUID
  association [0..*] to I_SecuritiesAccountPosition   as _SecuritiesAccountPosition    on $projection.SecuritiesAccountObjectUUID = _SecuritiesAccountPosition.SecuritiesAccountObjectUUID
  association [0..1] to I_SecuritiesAcctObjMstrData   as _SecuritiesAcctObjMstrData    on $projection.SecuritiesAccountObjectUUID = _SecuritiesAcctObjMstrData.SecuritiesAccountObjectUUID
  association [0..*] to I_SecuritiesAcctPosMstrData   as _SecuritiesAcctPosMstrData    on $projection.SecuritiesAccountObjectUUID = _SecuritiesAcctPosMstrData.SecuritiesAccountObjectUUID
  association [0..1] to I_CollateralPartnerFunction   as _SecuritiesAccountPartnerFunc on $projection.SecuritiesAccountPartnerFunc = _SecuritiesAccountPartnerFunc.CollateralPartnerFunction
{
  key sec_acc_bp_guid                                     as SecuritiesAccountPartnerUUID,
      sec_acc_guid                                        as SecuritiesAccountObjectUUID,
      cast( bupa_id as cms_dte_bpid_vdm preserving type ) as SecuritiesAccountPartnerID,
      @ObjectModel.foreignKey.association: '_SecuritiesAccountPartnerFunc'
      bpf                                                 as SecuritiesAccountPartnerFunc,
      bupa_share_nr                                       as SecuritiesAccountBPShareNmrtr,
      bupa_share_dr                                       as SecuritiesAccountBPShareDnmntr,
      bp_valid_from                                       as SecuritiesAcctBPValdFrmDte,
      bp_valid_to                                         as SecuritiesAcctBPValdToDte,

      _SecuritiesAccountObjectData,
      _SecuritiesAccountPosition,
      _SecuritiesAcctObjMstrData,
      _SecuritiesAcctPosMstrData,
      _SecuritiesAccountPartnerFunc
}
```
