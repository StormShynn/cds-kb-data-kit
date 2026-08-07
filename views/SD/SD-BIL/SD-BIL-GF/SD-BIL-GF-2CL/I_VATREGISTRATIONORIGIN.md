---
name: I_VATREGISTRATIONORIGIN
description: Vatregistrationorigin
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
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_VATREGISTRATIONORIGIN

**Vatregistrationorigin**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `VATRegistrationOrigin` | ✓ | |  | `cast(substring(dd07l.domvalue_l, 1, 1) as stceg_h preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_VATRegistrationOriginText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'VATRegistrationOrigin'
@ObjectModel.representativeKey: 'VATRegistrationOrigin'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'VAT Registration Origin'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDVATRGNORIGIN',
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view I_VATRegistrationOrigin
  as select from dd07l

  association [0..*] to I_VATRegistrationOriginText as _Text on $projection.VATRegistrationOrigin = _Text.VATRegistrationOrigin
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(dd07l.domvalue_l, 1, 1) as stceg_h preserving type ) as VATRegistrationOrigin,
      
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                    as DomainValue,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
where
  dd07l.domname  = 'STCEG_H' and dd07l.as4local = 'A';
```
