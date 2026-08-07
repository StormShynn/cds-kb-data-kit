---
name: I_JNTOPGAGRMTTEXTTP
description: Jntopgagrmttexttp
app_component: CA-JVA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - CA-JVA-JVA
  - interface-view
  - transactional-processing
  - text
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JNTOPGAGRMTTEXTTP

**Jntopgagrmttexttp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `JntOpgAgrmt` | ✓ | |  |  |
| `JntOpgAgrmtText` |  | |  |  |
| `JntOpgAgrmtLongText` |  | |  |  |
| `_JntOpgAgrmt` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Description - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   dataCategory: #TEXT
}

define view entity I_JntOpgAgrmtTextTP
  as projection on R_JntOpgAgrmtTextTP as JntOpgAgrmtText
{
  key JntOpgAgrmtText.CompanyCode,
      @Semantics.language: true
  key JntOpgAgrmtText.Language,
  key JntOpgAgrmtText.JntOpgAgrmt,
      @Semantics.text: true
      JntOpgAgrmtText.JntOpgAgrmtText,
      JntOpgAgrmtText.JntOpgAgrmtLongText,

      _JntOpgAgrmt : redirected to parent I_JntOpgAgrmtTP
}
```
