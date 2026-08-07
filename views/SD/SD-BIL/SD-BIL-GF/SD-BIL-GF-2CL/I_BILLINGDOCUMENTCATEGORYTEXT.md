---
name: I_BILLINGDOCUMENTCATEGORYTEXT
description: Billing DocumentUMENTCATEGORYTEXT
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
# I_BILLINGDOCUMENTCATEGORYTEXT

**Billing DocumentUMENTCATEGORYTEXT**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentCategory` | ✓ | |  | `cast( domvalue_l as fktyp )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BillingDocumentCategoryName` |  | |  | `cast( ddtext as billingdocumentcategoryname preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentCategory` | `I_BillingDocumentCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingDocumentCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Billing Document Category - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDBILLGDOCCATT',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingDocumentCategoryText
  as select from dd07t

  association [1..1] to I_BillingDocumentCategory as _BillingDocumentCategory on $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      @ObjectModel.text.element: ['BillingDocumentCategoryName']
  key cast( domvalue_l as fktyp )                                   as BillingDocumentCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                   as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as billingdocumentcategoryname preserving type ) as BillingDocumentCategoryName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      domvalue_l                                                    as DomainValue,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT]
      _BillingDocumentCategory,
      _Language
}
where
      dd07t.domname  = 'FKTYP'
  and dd07t.as4local = 'A'
```
