---
name: I_BUSEVTLOGBUSEVENTPAYLOAD
description: Busevtlogbuseventpayload
app_component: CA-GTF-BEL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-BEL
  - interface-view
  - component:CA-GTF-BEL
  - lob:Cross-Application Components
---
# I_BUSEVTLOGBUSEVENTPAYLOAD

**Busevtlogbuseventpayload**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessEventUUID` | ✓ | |  |  |
| `SAPObjectType` | ✓ | |  |  |
| `BusEvtLogFieldName` | ✓ | |  |  |
| `BusEvtLogOldFieldValue` |  | |  |  |
| `BusEvtLogOldFieldUnit` |  | |  |  |
| `BusEvtLogNewFieldValue` |  | |  |  |
| `BusEvtLogNewFieldUnit` |  | |  |  |
| `BusEvtLogOldFieldCurrency` |  | |  |  |
| `BusEvtLogNewFieldCurrency` |  | |  |  |
| `BusEvtLogFieldHasOldValue` |  | |  |  |
| `BusEvtLogFieldIsQualifier` |  | |  |  |
| `BusEvtLogLastChangedDateTime` |  | |  |  |
| `BusEvtLogGlobalFieldName` |  | |  |  |
| `BuEvLgGlobalFieldNameUpperCase` |  | |  |  |
| `ChangeDocumentDatabaseTable` |  | |  |  |
| `ChangeDocDatabaseTableField` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK 
@VDM.viewType: #COMPOSITE
@ObjectModel: {
  sapObjectNodeType:{name: 'BusEvtLogEventPayload'},
  representativeKey: 'BusinessEventUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   }
}
@EndUserText.label: 'Business Event Payload'

define view entity I_BusEvtLogBusEventPayload as select from I_BusEvtLogPayload {
  key BusinessEventUUID,
  key SAPObjectType,
  key BusEvtLogFieldName,
      BusEvtLogOldFieldValue,
      BusEvtLogOldFieldUnit,
      BusEvtLogNewFieldValue,
      BusEvtLogNewFieldUnit,
      BusEvtLogOldFieldCurrency,
      BusEvtLogNewFieldCurrency,
      BusEvtLogFieldHasOldValue,
      BusEvtLogFieldIsQualifier,
      BusEvtLogLastChangedDateTime,
      BusEvtLogGlobalFieldName,
      BuEvLgGlobalFieldNameUpperCase,
      ChangeDocumentDatabaseTable,
      ChangeDocDatabaseTableField
 
}
```
