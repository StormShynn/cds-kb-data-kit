---
name: I_EHSRSKASSMT2RSKCTRLAUTHZNFLD
description: "Risk Control Authorization Fields"
app_component: EHS-SUS-HS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSMT2RSKCTRLAUTHZNFLD')/$value
semantic_en: "Risk Control Authorization Fields"
semantic_vi: "Risk Control Authorization Fields — CDS view giao diện dựa trên I_EHSRskAssmt2RiskControl."
keywords:
  - "risk"
  - "control"
  - "authorization"
  - "fields"
  - "task"
  - "host"
  - "object"
  - "instance"
  - "assessment"
  - "type"
  - "assessment2"
  - "status"
  - "plant"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-HS
  - EHS-SUS
  - EHS-SUS-HS
  - interface-view
---
# I_EHSRSKASSMT2RSKCTRLAUTHZNFLD

**Risk Control Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-HS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSMT2RSKCTRLAUTHZNFLD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSRiskControlUUID` | ✓ | |  |  | `RAW(16)` | UUID in X form (binary) |
| `EHSTaskHostObjectInstance` |  | |  | `cast(bintohex(EHSRiskControlUUID) as sibfboriid)` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `EHSRiskAssessmentType` |  | | `_RiskAssessment` | `EHSRiskAssessmentType` | `CHAR(21)` | Risk Assessment Type |
| `EHSRiskAssessment2Status` |  | | `_RiskAssessment` | `EHSRiskAssessment2Status` | `CHAR(2)` | Risk Assessment Status |
| `Plant` |  | | `_RiskAssessment` | `Plant` | `CHAR(4)` | Plant ID |
| `BusinessArea` |  | | `_RiskAssessment` | `BusinessArea` | `CHAR(4)` | Business Area |
| `EHSRiskAssessmentAuthznGrp` |  | | `_RiskAssessment` | `EHSRiskAssessmentAuthznGrp` | `CHAR(21)` | Authorization Group for Risk Assessment |
| `EHSRiskAssessmentIsBlocked` |  | | `_RiskAssessment` | `EHSRiskAssessmentIsBlocked` | `CHAR(1)` | Risk Assessment is Blocked |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSMT2RSKCTRLAUTHZNFLD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSMT2RSKCTRLAUTHZNFLD')/$value)*

```abap
@EndUserText.label: 'Risk Control Authorization Fields'
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #M,
  dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #NONE

@VDM.viewType: #BASIC
define view entity I_EHSRskAssmt2RskCtrlAuthznFld
  as select from I_EHSRskAssmt2RiskControl
{
  key EHSRiskControlUUID,
      cast(bintohex(EHSRiskControlUUID) as sibfboriid) as EHSTaskHostObjectInstance,
      _RiskAssessment.EHSRiskAssessmentType,
      _RiskAssessment.EHSRiskAssessment2Status,
      _RiskAssessment.Plant,
      _RiskAssessment.BusinessArea,
      _RiskAssessment.EHSRiskAssessmentAuthznGrp,
      _RiskAssessment.EHSRiskAssessmentIsBlocked
}
```
