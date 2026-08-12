---
name: I_BUSINESSPARTNERLEGALFORM
description: "Business PartnerLEGALFORM"
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
  - business-partner
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERLEGALFORM

**Business PartnerLEGALFORM**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalForm` | ✓ | |  | `legal_enty` | `CHAR(2)` | BP: Legal form of organization |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerLegalFormText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPLEGALFORM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true    
  }
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Legal Form'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerLegalForm'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  representativeKey: 'LegalForm',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #ANALYTICAL_DIMENSION ,  
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                          #EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION]
}


define view I_BusinessPartnerLegalForm
  as select from tb019
  association [0..*] to I_BusinessPartnerLegalFormText as _Text on $projection.LegalForm = _Text.LegalForm
{
      @ObjectModel.text.association: '_Text'
  key legal_enty as LegalForm,
      _Text
}
```
