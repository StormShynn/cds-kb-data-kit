---
name: I_BUSPARTMARITALSTATUSTEXT
description: "Business PartnerMARITALSTATUSTEXT"
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
  - status
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTMARITALSTATUSTEXT

**Business PartnerMARITALSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MaritalStatus` | ✓ | |  | `marst` | `CHAR(1)` | Marital Status of Business Partner |
| `MaritalStatusName` |  | |  | `bez20` | `CHAR(20)` | Short name |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPBMARITALSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'BUPA Marital Status - Text'
@ObjectModel: {
  representativeKey: 'MaritalStatus',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
define view I_BusPartMaritalStatusText as select from tb027t {
  @Semantics.language: true
key spras as Language ,
key marst as MaritalStatus,
  @Semantics.text: true
  @EndUserText.label: 'Description'  
bez20  as MaritalStatusName
}
```
