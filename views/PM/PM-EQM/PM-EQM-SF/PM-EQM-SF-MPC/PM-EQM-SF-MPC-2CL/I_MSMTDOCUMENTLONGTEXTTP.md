---
name: I_MSMTDOCUMENTLONGTEXTTP
description: Msmtdocumentlongtexttp
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - transactional-processing
  - document
  - text
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MSMTDOCUMENTLONGTEXTTP

**Msmtdocumentlongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasurementDocument` | ✓ | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `MeasurementDocumentLongText` |  | |  |  |  |  |
| `_MeasurementDocument` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Measurement Document Long Text - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #MIXED
   },
   semanticKey: ['MeasurementDocument']

 }
//@ObjectModel.dataCategory:#TEXT
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MsmtDocumentLongTextTP
  as projection on R_MsmtDocumentLongTextTP as MeasurementDocumentLongText
{

  key MeasurementDocument,

      @Consumption.hidden: true
      @Semantics.language: true
      Language,

      MeasurementDocumentLongText,

      /* Associations */
      _MeasurementDocument : redirected to parent I_MeasurementDocumentTP_2

}
```
