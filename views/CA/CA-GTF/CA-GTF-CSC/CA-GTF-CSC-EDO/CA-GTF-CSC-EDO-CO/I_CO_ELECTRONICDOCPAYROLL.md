---
name: I_CO_ELECTRONICDOCPAYROLL
description: CO Electronicdocpayroll
app_component: CA-GTF-CSC-EDO-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-CO
  - lob:Cross-Application Components
---
# I_CO_ELECTRONICDOCPAYROLL

**CO Electronicdocpayroll**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `CO_ElectronicDocPyrlUniqueID` |  | |  |  |  |  |
| `CO_ElectronicDocPayrollNumber` |  | |  |  |  |  |
| `CO_ElectronicDocEmployeeCode` |  | |  |  |  |  |
| `CO_ElectronicDocPayrollDateTxt` |  | |  |  |  |  |
| `CO_ElectronicDocXMLType` |  | |  |  |  |  |
| `CO_ElectronicDocGnrtnDateText` |  | |  |  |  |  |
| `CO_ElectronicDocGnrtnTimeText` |  | |  |  |  |  |
| `CO_ElectronicDocumentNoteType` |  | |  |  |  |  |
| `CO_ElectronicDocNoveltyFlag` |  | |  |  |  |  |
| `CO_ElectronicDocumentZipKeyVal` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Colombia ePayroll Transmission'

define view entity I_CO_ElectronicDocPayroll
  as select from R_CO_ElectronicDocPayroll
{

  key ElectronicDocUUID,
      CO_ElectronicDocPyrlUniqueID,
      CO_ElectronicDocPayrollNumber,
      CO_ElectronicDocEmployeeCode,
      CO_ElectronicDocPayrollDateTxt,
      CO_ElectronicDocXMLType,
      CO_ElectronicDocGnrtnDateText,
      CO_ElectronicDocGnrtnTimeText,
      CO_ElectronicDocumentNoteType,
      CO_ElectronicDocNoveltyFlag,
      @EndUserText.label: 'Zip Key'
      CO_ElectronicDocumentZipKeyVal

}
```
