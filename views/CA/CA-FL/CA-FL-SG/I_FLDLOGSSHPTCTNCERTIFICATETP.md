---
name: I_FLDLOGSSHPTCTNCERTIFICATETP
description: Fldlogsshptctncertificatetp
app_component: CA-FL-SG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FL
  - CA-FL-SG
  - interface-view
  - transactional-processing
  - component:CA-FL-SG
  - lob:Cross-Application Components
---
# I_FLDLOGSSHPTCTNCERTIFICATETP

**Fldlogsshptctncertificatetp**

| Property | Value |
|---|---|
| App Component | `CA-FL-SG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FldLogsContainerUUID` | `FldLogsContainerUUID` |
| key `FldLogsCertificateNumber` | `FldLogsCertificateNumber` |
| `FldLogsCertNumberForEdit` | `FldLogsCertificateNumber` |
| `FldLogsCertificateType` | `FldLogsCertificateType` |
| `FldLogsCertStartDate` | `FldLogsCertStartDate` |
| `FldLogsCertEndDate` | `FldLogsCertEndDate` |
| `FldLogsNextCertificateDate` | `FldLogsNextCertificateDate` |
| `FldLogsCtnCertificateStatus` | `FldLogsCtnCertificateStatus` |
| `FldLogsCtnCertStsCriticality` | `FldLogsCtnCertStsCriticality` |
| `FldLogsCtnCertLoclLstChgDteTme` | `FldLogsCtnCertLoclLstChgDteTme` |
| `_CertificateTypeText` | *Association* |
| `_CertText` | *Association* |
| `_Container` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Field Logistics Container Certificate - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@VDM.viewType:#TRANSACTIONAL
//Enable extensibility
@AbapCatalog.extensibility:{ extensible:true,
dataSources: ['_Certificate'],
allowNewCompositions: true,
elementSuffix: 'CER',
quota: {
    maximumFields: 816 ,
    maximumBytes: 8160
  } }

 //for C1 contract
 @ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #TRANSACTIONAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET ]
 @ObjectModel.sapObjectNodeType.name: 'FldLogsShptCtnCertificate'
define  view entity I_FldLogsShptCtnCertificateTP
  as projection on R_FldLogsShptCtnCertificateTP as _Certificate
{
key FldLogsContainerUUID,
  key FldLogsCertificateNumber,
      @ObjectModel.editableFieldFor: 'FldLogsCertificateNumber'
      FldLogsCertificateNumber as FldLogsCertNumberForEdit,

      FldLogsCertificateType,
      FldLogsCertStartDate,
      FldLogsCertEndDate,
      FldLogsNextCertificateDate,
      FldLogsCtnCertificateStatus,
      @EndUserText.label: 'Container Status Criticality'
      FldLogsCtnCertStsCriticality,
      //local ETag field --> OData ETag
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      FldLogsCtnCertLoclLstChgDteTme,
//      _Container,
      _CertificateTypeText,
      _CertText,
       _Container : redirected to parent I_FldLogsShipmentContainerTP
}
```
