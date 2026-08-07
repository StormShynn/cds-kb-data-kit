---
name: I_BUSPARTINDUSTRYSYSTEMTEXT
description: Business PartnerINDUSTRYSYSTEMTEXT
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTINDUSTRYSYSTEMTEXT

**Business PartnerINDUSTRYSYSTEMTEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |
| `IndustrySystemType` | ✓ | |  | `istype` |
| `IndustrySystemName` |  | |  | `bez30` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPINDSYSTTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Industry System - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  representativeKey: 'IndustrySystemType',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartIndustrySystemText
  as select from tb038t
{
      @Semantics.language: true
  key langu as Language,
  key istype as IndustrySystemType,
      @Semantics.text: true
      bez30 as IndustrySystemName
}
```
