---
name: I_BILLINGDOCUMENTTAXCODETEXT
description: "Billing DocumentUMENTTAXCODETEXT"
app_component: FI-LOC-LO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - billing-document
  - billing
  - tax
  - document
  - text
  - component:FI-LOC-LO
  - lob:Finance
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTAXCODETEXT

**Billing DocumentUMENTTAXCODETEXT**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `TaxCalculationProcedure` | ✓ | |  | `kalsm` |  |  |
| `TaxCode` | ✓ | |  | `mwskz` |  |  |
| `BillingDocumentType` | ✓ | |  | `fkart` |  |  |
| `TaxCodeDescription` |  | |  | `reason_text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Legal Tax Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #CUSTOMIZING
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE ]
define view entity I_BillingDocumentTaxCodeText
  as select from glo_log_reas_txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,

  key kalsm       as TaxCalculationProcedure,
  key mwskz       as TaxCode,
  key fkart       as BillingDocumentType,
      @Semantics.text:true
      reason_text as TaxCodeDescription,

      //Associations
      _Language
}
```
