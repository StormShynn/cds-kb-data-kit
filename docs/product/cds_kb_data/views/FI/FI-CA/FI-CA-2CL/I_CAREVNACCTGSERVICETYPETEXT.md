---
name: I_CAREVNACCTGSERVICETYPETEXT
description: "Carevnacctgservicetypetext"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - service
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAREVNACCTGSERVICETYPETEXT

**Carevnacctgservicetypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CARevenueAccountingServiceType` | ✓ | |  | `service_type` |  |  |
| `Language` | ✓ | |  | `cast( langu as spras preserving type )` |  |  |
| `CARevnAcctgServiceTypeText` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Revenue Accounting Service Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CARevenueAccountingServiceType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CARevnAcctgServiceTypeText
  as select from tfk_ra_servtyp_t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key service_type                           as CARevenueAccountingServiceType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( langu as spras preserving type ) as Language,

      @Semantics.text: true
      text                                   as CARevnAcctgServiceTypeText,

      _Language
}
```
