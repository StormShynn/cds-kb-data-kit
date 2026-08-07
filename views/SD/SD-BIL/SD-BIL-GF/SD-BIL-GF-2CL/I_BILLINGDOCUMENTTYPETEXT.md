---
name: I_BILLINGDOCUMENTTYPETEXT
description: Billing DocumentUMENTTYPETEXT
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - text-view
  - billing-document
  - billing
  - document
  - text
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTYPETEXT

**Billing DocumentUMENTTYPETEXT**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentType` | ✓ | |  | `fkart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BillingDocumentTypeName` |  | |  | `vtext` |  |  |
| `_BillingDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Billing Document Type - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDBILLGDOCTYPET',
  buffering: {
    status: #ACTIVE,
    type: #FULL
  },
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_BillingDocumentTypeText
as
select from tvfkt
association [0..1] to I_BillingDocumentType as _BillingDocumentType on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_BillingDocumentType'
    key fkart as BillingDocumentType,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Semantics.text
    vtext as BillingDocumentTypeName,
    
    _BillingDocumentType,
    _Language
};
```
