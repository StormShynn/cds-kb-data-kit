---
name: I_EHSRSKASSESSMENTAUTHZNFIELDS
description: "EHS Risk Assessment Authorization Fields"
app_component: EHS-SUS-HS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSESSMENTAUTHZNFIELDS')/$value
semantic_en: "EHS Risk Assessment Authorization Fields"
semantic_vi: "EHS Risk Assessment Authorization Fields — CDS view giao diện dựa trên I_EHSRiskAssessment."
keywords:
  - "ehs"
  - "risk"
  - "assessment"
  - "authorization"
  - "fields"
  - "task"
  - "host"
  - "object"
  - "instance"
  - "type"
  - "location"
  - "group"
  - "business"
  - "area"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-HS
  - EHS-SUS
  - EHS-SUS-HS
  - interface-view
---
# I_EHSRSKASSESSMENTAUTHZNFIELDS

**EHS Risk Assessment Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-HS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSESSMENTAUTHZNFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSRiskAssessmentUUID` | ✓ | |  |  | `RAW(16)` | Risk Assessment - Root UUID |
| `EHSTaskHostObjectInstance` |  | |  | `cast(bintohex(EHSRiskAssessmentUUID) as sibfboriid)` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `EHSRiskAssessmentType` |  | |  |  | `CHAR(21)` | Risk Assessment Type |
| `EHSLocationAuthorizationGroup` |  | |  |  | `CHAR(21)` | Location Authorization Group |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `EHSLocationUUIDHex` |  | |  | `cast(EHSLocationUUIDHex as ehfnd_loc_root_uuid_hex preserving type)` | `CHAR(32)` | EHS Location - Root UUID Hex |
| `_EHSRiskAssessmentType` | | ✓ | | | | |
| `_EHSLocationAuthGroup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSESSMENTAUTHZNFIELDS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSESSMENTAUTHZNFIELDS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSRASAUTH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'EHS Risk Assessment Authorization Fields'
@ObjectModel.usageType:{ serviceQuality: #C,        // < 15 msec
                         sizeCategory:  #M,         // < 100.000
                         dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view I_EHSRskAssessmentAuthznFields as select from I_EHSRiskAssessment {
  key EHSRiskAssessmentUUID,
  cast(bintohex(EHSRiskAssessmentUUID) as sibfboriid) as EHSTaskHostObjectInstance,
  EHSRiskAssessmentType,
  EHSLocationAuthorizationGroup,
  BusinessArea,
  Plant,
  CostCenter,
  CompanyCode,
  ControllingArea,
// Begin correction 3281646 - 14.12.2022  **************************
  cast(EHSLocationUUIDHex as ehfnd_loc_root_uuid_hex preserving type) as EHSLocationUUIDHex,      ////correction 3295181 - 01.03.2023
// End correction 3281646 - 14.12.2022  ****************************

  _EHSRiskAssessmentType,
  _EHSLocationAuthGroup,
  _BusinessArea,
  _Plant,
//  _CostCenter,
  _CompanyCode,
  _ControllingArea
}
```
