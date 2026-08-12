---
name: I_CMPLNCRQMTAUTHZNFIELDS
description: "Cmplnc Requirement Authorization Fields"
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCRQMTAUTHZNFIELDS')/$value
semantic_en: "Cmplnc Requirement Authorization Fields"
semantic_vi: "Cmplnc Requirement Authorization Fields — CDS view giao diện dựa trên P_CmplncRqmtRelevantRev."
keywords:
  - "cmplnc"
  - "requirement"
  - "authorization"
  - "fields"
  - "cmpl"
  - "task"
  - "host"
  - "object"
  - "instance"
  - "vers"
  - "domain"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-CI
  - EHS-SUS
  - EHS-SUS-CI
  - interface-view
---
# I_CMPLNCRQMTAUTHZNFIELDS

**Cmplnc Requirement Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCRQMTAUTHZNFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqUUID` | ✓ | |  |  | `RAW(16)` | Compliance Requirement |
| `EHSTaskHostObjectInstance` |  | |  | `cast(bintohex(I_CmplRqVersEnhanced.CmplRqUUID) as sibfboriid)` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `CmplRqDomain` |  | |  | `cast( I_CmplRqVersEnhanced.CmplRqDomain as ehfnd_req_domain_nce preserving type )` | `CHAR(21)` | Compliance Requirement Domain |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCRQMTAUTHZNFIELDS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLNCRQMTAUTHZNFIELDS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICPLRQAUTHFLDS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cmplnc Requirement Authorization Fields'
@ObjectModel.usageType:{ dataClass: #MASTER,
                         serviceQuality: #C,
                         sizeCategory: #S }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE

define view I_CmplncRqmtAuthznFields
  as select from P_CmplncRqmtRelevantRev
    inner join   I_CmplRqVersEnhanced on  P_CmplncRqmtRelevantRev.CmplRqUUID    = I_CmplRqVersEnhanced.CmplRqUUID
                                      and P_CmplncRqmtRelevantRev.EffectiveDate = I_CmplRqVersEnhanced.EffectiveDate
{
  key I_CmplRqVersEnhanced.CmplRqUUID,
      cast(bintohex(I_CmplRqVersEnhanced.CmplRqUUID) as sibfboriid)                     as EHSTaskHostObjectInstance,
      I_CmplRqVersEnhanced.CmplRqVersUUID,
      cast( I_CmplRqVersEnhanced.CmplRqDomain as ehfnd_req_domain_nce preserving type ) as CmplRqDomain,
      I_CmplRqVersEnhanced._CmplRqVersAppltyArea
}
where
  I_CmplRqVersEnhanced.CmplRqApplicationComponent = 'ENV'
```
