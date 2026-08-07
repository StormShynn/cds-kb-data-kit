---
name: I_BUSPARTINDUSTRYSYSTEM
description: Business PartnerINDUSTRYSYSTEM
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
  - business-partner
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTINDUSTRYSYSTEM

**Business PartnerINDUSTRYSYSTEM**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IndustrySystemType` | ✓ | |  | `istype` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartIndustrySystemText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPINDSYST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  sapObjectNodeType.name: 'BPIndustrySystemType',
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@EndUserText.label: 'Business Partner Industry System'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartIndustrySystem
  as select from tb038
  association [0..*] to I_BusPartIndustrySystemText as _Text on $projection.IndustrySystemType = _Text.IndustrySystemType
{
      @ObjectModel.text.association: '_Text'
  key istype as IndustrySystemType,
      _Text
}
```
