---
name: I_REPAYMENTFORMTEXT
description: "Repaymentformtext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - payment
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_REPAYMENTFORMTEXT

**Repaymentformtext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `REPaymentForm` | ✓ | |  | `cast( dd07t.domvalue_l as recdvdmpaymentformrh )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `REPaymentFormName` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_REPaymentForm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREPAYTFORMT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Payment Form - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REPaymentForm',
  usageType: {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'RealEstatePaymentFormText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_REPaymentFormText
  as select from dd07t
  association        to parent I_REPaymentForm as _REPaymentForm on $projection.REPaymentForm = _REPaymentForm.REPaymentForm
  association [0..1] to I_Language             as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REPaymentForm'
      @ObjectModel.text.element: ['REPaymentFormName']
  key cast( dd07t.domvalue_l as recdvdmpaymentformrh )     as REPaymentForm,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as REPaymentFormName,
      _REPaymentForm,
      _Language
}
where
      dd07t.domname  = 'RECDPAYMENTFORMRH'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
