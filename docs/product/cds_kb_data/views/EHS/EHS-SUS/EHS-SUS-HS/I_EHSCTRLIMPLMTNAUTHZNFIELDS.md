---
name: I_EHSCTRLIMPLMTNAUTHZNFIELDS
description: "EHS Control Implementation Authorization Fields"
app_component: EHS-SUS-HS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCTRLIMPLMTNAUTHZNFIELDS')/$value
semantic_en: "EHS Control Implementation Authorization Fields"
semantic_vi: "EHS Control Implementation Authorization Fields — CDS view giao diện dựa trên I_EHSRiskControl."
keywords:
  - "ehs"
  - "control"
  - "implementation"
  - "authorization"
  - "fields"
  - "instance"
  - "task"
  - "host"
  - "object"
  - "risk"
  - "assessment"
  - "type"
  - "location"
  - "group"
  - "plant"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-HS
  - EHS-SUS
  - EHS-SUS-HS
  - interface-view
---
# I_EHSCTRLIMPLMTNAUTHZNFIELDS

**EHS Control Implementation Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-HS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCTRLIMPLMTNAUTHZNFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSControlInstanceUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `EHSTaskHostObjectInstance` |  | |  | `cast(bintohex(EHSControlInstanceUUID) as sibfboriid)` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `EHSRiskAssessmentType` |  | | `_EHSRiskRoot` | `EHSRiskAssessmentType` | `CHAR(21)` | Risk Assessment Type |
| `EHSLocationAuthorizationGroup` |  | | `_EHSRiskRoot` | `EHSLocationAuthorizationGroup` | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | | `_EHSRiskRoot` | `Plant` | `CHAR(4)` | Plant ID |
| `CostCenter` |  | | `_EHSRiskRoot` | `CostCenter` | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | | `_EHSRiskRoot` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | | `_EHSRiskRoot` | `CompanyCode` | `CHAR(4)` | Company Code |
| `BusinessArea` |  | | `_EHSRiskRoot` | `BusinessArea` | `CHAR(4)` | Business Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCTRLIMPLMTNAUTHZNFIELDS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSCTRLIMPLMTNAUTHZNFIELDS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEHSCIAUTHFLDS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'EHS Control Implementation Authorization Fields'
// used for BOBF Master Data Object
@ObjectModel.usageType:{ serviceQuality: #C,        // < 15 msec
                         sizeCategory:  #L,         // < 10.000.000
                         dataClass: #MIXED }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view I_EHSCtrlImplmtnAuthznFields
  as select from I_EHSRiskControl
{
  key EHSControlInstanceUUID,
      cast(bintohex(EHSControlInstanceUUID) as sibfboriid) as EHSTaskHostObjectInstance,
      _EHSRiskRoot.EHSRiskAssessmentType,
      _EHSRiskRoot.EHSLocationAuthorizationGroup,
      _EHSRiskRoot.Plant,
      _EHSRiskRoot.CostCenter,
      _EHSRiskRoot.ControllingArea,
      _EHSRiskRoot.CompanyCode,
      _EHSRiskRoot.BusinessArea,
      _EHSRiskRoot._Plant,
      _EHSRiskRoot._BusinessArea
}
```
