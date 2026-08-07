---
name: I_BUSPARTBIRTHDATESTATUSTEXT
description: "Business PartnerBIRTHDATESTATUSTEXT"
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
  - status
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTBIRTHDATESTATUSTEXT

**Business PartnerBIRTHDATESTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `BusinessPartnerBirthDateStatus` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `BusPartBirthDateStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPBIRTHSTATETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Birth Date Status - Text'
@ObjectModel: {
  representativeKey: 'BusinessPartnerBirthDateStatus',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #META,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartBirthDateStatusText
  as select from dd07t
{
      @Semantics.language: true
  key ddlanguage as Language,
      //      @Search.defaultSearchElement: true
  key domvalue_l as BusinessPartnerBirthDateStatus,
      @Semantics.text: true
      ddtext     as BusPartBirthDateStatusText

}
where
  domname = 'BU_BIRTHDT_STATUS'
```
