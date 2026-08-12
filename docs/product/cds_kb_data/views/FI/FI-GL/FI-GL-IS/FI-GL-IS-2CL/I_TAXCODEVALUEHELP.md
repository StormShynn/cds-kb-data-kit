---
name: I_TAXCODEVALUEHELP
description: "Taxcodevaluehelp"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxCalculationProcedure` | ✓ | |  |  |  |  |
| `TaxCode` | ✓ | |  |  |  |  |

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
