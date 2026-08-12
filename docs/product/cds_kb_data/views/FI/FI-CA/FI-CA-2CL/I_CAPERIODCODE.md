---
name: I_CAPERIODCODE
description: "Caperiodcode"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAPERIODCODE

**Caperiodcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAPeriodCode` | ✓ | |  | `persl` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAPeriodCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataCategory: #DIMENSION,
              dataExtraction.enabled : true}

@EndUserText.label: 'Period Key'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION ,
                representativeKey: 'CAPeriodCode',
                sapObjectNodeType.name: 'ContrAcctgPeriodCode',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAPeriodCode
  as select from tfk001p
  
  association [0..*] to I_CAPeriodCodeText as _Text on $projection.CAPeriodCode = _Text.CAPeriodCode

{
      @ObjectModel.text.association: '_Text'
  key persl as CAPeriodCode,

      _Text
}
```
