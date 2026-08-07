---
name: I_BUSINESSPARTNERLEGALFORMTEXT
description: Business PartnerLEGALFORMTEXT
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
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERLEGALFORMTEXT

**Business PartnerLEGALFORMTEXT**

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
| `LegalForm` | ✓ | |  | `legal_enty` | `CHAR(2)` | BP: Legal form of organization |
| `LegalFormShortName` |  | |  | `textshort` | `CHAR(15)` | Short name |
| `LegalFormDescription` |  | |  | `textlong` | `CHAR(40)` | Description |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPLEGALFORMTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'LegalForm',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'Business Partner Legal Form - Text'
define view I_BusinessPartnerLegalFormText
  as select from tb020
{
      @Semantics.language: true
  key spras      as Language,
  key legal_enty as LegalForm,
      @Semantics.text: true
      @Search.defaultSearchElement: true  
      textshort  as LegalFormShortName,
      textlong   as LegalFormDescription
}
```
