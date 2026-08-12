---
name: I_SRVCDOCESCALATIONTEXT
description: "Srvcdocescalationtext"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCESCALATIONTEXT

**Srvcdocescalationtext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceEscalationLevel` | ✓ | |  | `domvalue_l` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ServiceEscalationLevelName` |  | |  | `ddtext` |  |  |
| `_SrvcDocEscalation` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocEscalation` | `I_SrvcDocEscalation` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Escalation Level of Srvc Transac - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVESCSTATTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceEscalationLevel',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocEscalationText
  as select from dd07t
  association [1]    to I_SrvcDocEscalation as _SrvcDocEscalation on $projection.ServiceEscalationLevel = _SrvcDocEscalation.ServiceEscalationLevel
  association [1..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcDocEscalation'
  key domvalue_l as ServiceEscalationLevel,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as ServiceEscalationLevelName,

      _SrvcDocEscalation,
      _Language
}
where
      domname  = 'CRM_SRQM_ESCALATION'
  and as4local = 'A'
```
