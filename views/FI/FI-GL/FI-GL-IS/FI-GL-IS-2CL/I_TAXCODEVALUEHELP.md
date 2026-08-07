---
name: I_TAXCODEVALUEHELP
description: Taxcodevaluehelp
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - tax
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TAXCODEVALUEHELP

**Taxcodevaluehelp**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TaxCalculationProcedure` | ✓ | |  |  |
| `TaxCode` | ✓ | |  |  |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'TaxCode',
                usageType: { sizeCategory: #S,
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A },
                supportedCapabilities: [#VALUE_HELP_PROVIDER],
                modelingPattern: #VALUE_HELP_PROVIDER }
@Analytics.technicalName: 'IFITAXCODEVH'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true
@Consumption.ranked: true
@EndUserText.label: 'Tax Code'

define view entity I_TaxCodeValueHelp as select from I_TaxCode as I_TaxCode {

//  @Consumption.hidden: true - with this, the field is not part of the selection, not used in the text association and execution of VH will return non-deterministic texts 
  @UI.hidden: true 
  key I_TaxCode.TaxCalculationProcedure,
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  @ObjectModel.text.association: '_Text'
  key I_TaxCode.TaxCode,
  @Consumption.hidden: true 
  I_TaxCode._Text
    
}
```
