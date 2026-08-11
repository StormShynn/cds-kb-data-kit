---
name: I_JITDELIVSQNCGRPSQNCNMBRCHK
description: "This CDS view provides sequence number check configurations for delivery sequence groups. It defines the sequence number check rules based on internal processing status. This CDS view provides the data to answer the following business questions: What sequence number check rules are configured? Which internal processing statuses have check rules defined? What is the sequence number check rule for each status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSQNCNMBRCHK')/$value
semantic_en: "This CDS view provides sequence number check configurations for delivery sequence groups. It defines the sequence number check rules based on internal processing status. This CDS view provides the data to answer the following business questions: What sequence number check rules are configured? Which internal processing statuses have check rules defined? What is the sequence number check rule for each status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sqnc Grp Sequence Number Check — CDS view giao diện dựa trên njit_d_dsg_snc."
keywords:
  - "delivery"
  - "sqnc"
  - "grp"
  - "sequence"
  - "number"
  - "check"
  - "deliv"
  - "nmbr"
  - "processing"
  - "status"
  - "rule"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - bo:project
---
# I_JITDELIVSQNCGRPSQNCNMBRCHK

**This CDS view provides sequence number check configurations for delivery sequence groups. It defines the sequence number check rules based on internal processing status. This CDS view provides the data to answer the following business questions: What sequence number check rules are configured? Which internal processing statuses have check rules defined? What is the sequence number check rule for each status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSQNCNMBRCHK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpSqncNmbrChkUUID` | ✓ | |  | `jitdelivsqncgrpsqncnmbrchkuuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `JITIntProcessingStatus` |  | |  | `jitintprocessingstatus` | `CHAR(5)` | Internal Processing Status |
| `JITSequenceNumberCheckRule` |  | |  | `jitsequencenumbercheckrule` | `CHAR(1)` | NJIT Sequence Number Check Rule |
| `_JITSequenceNumberChkRule` | | ✓ | | | | |
| `_JITInternalStatusText` | | ✓ | | | | |
| `_JITDelivSqncGrpSqncNmbrSts` | | ✓ | | | | |
| `_JITDelivSqncGrpHeaderBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITSequenceNumberChkRule` | `I_JITSequenceNumberChkRule` | [0..1] |
| `_JITInternalStatusText` | `I_JITInternalStatusText` | [0..*] |
| `_JITDelivSqncGrpSqncNmbrSts` | `I_JITSequenceNumberStatusHdr` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSQNCNMBRCHK')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSQNCNMBRCHK')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY }
@Analytics                  : { dataCategory            : #DIMENSION,
                                internalName            : #LOCAL,
                                technicalName           : 'IJITDSGSEQNRCHK'
                              }
@EndUserText.label          : 'Delivery Sqnc Grp Sequence Number Check'
@Metadata.allowExtensions   :true
@ObjectModel: {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'JITDelivSqncGrpSqncNmbrChkUUID',
  sapObjectNodeType.name    : 'JITDelivSqncGrpSqncNmbrChk',
  supportedCapabilities     : [ #ANALYTICAL_DIMENSION,
                                #CDS_MODELING_ASSOCIATION_TARGET,
                                #CDS_MODELING_DATA_SOURCE,
                                #SQL_DATA_SOURCE
                              ],
  usageType                 : { dataClass               : #MASTER,
                                serviceQuality          : #A,
                                sizeCategory            : #S
                              }
}
@VDM.viewType               : #BASIC
define view entity I_JITDelivSqncGrpSqncNmbrChk
  as select from njit_d_dsg_snc
  association        to parent I_JITDelivSqncGrpHeaderBasic as _JITDelivSqncGrpHeaderBasic on  $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeaderBasic.JITDelivSqncGrpUUID
  association [0..1] to I_JITSequenceNumberChkRule          as _JITSequenceNumberChkRule   on  $projection.JITSequenceNumberCheckRule = _JITSequenceNumberChkRule.JITSequenceNumberCheckRule
  association [0..*] to I_JITInternalStatusText             as _JITInternalStatusText      on  $projection.JITIntProcessingStatus = _JITInternalStatusText.JITIntProcessingStatus
  association [0..*] to I_JITSequenceNumberStatusHdr        as _JITDelivSqncGrpSqncNmbrSts on  $projection.JITDelivSqncGrpUUID               = _JITDelivSqncGrpSqncNmbrSts.JITDelivSqncGrpUUID
                                                                                           and $projection.JITIntProcessingStatus            = _JITDelivSqncGrpSqncNmbrSts.JITIntProcessingStatus
                                                                                           and _JITDelivSqncGrpSqncNmbrSts.SupplyControlUUID = abap.raw'00000000000000000000000000000000'
{
  key jitdelivsqncgrpsqncnmbrchkuuid as JITDelivSqncGrpSqncNmbrChkUUID,
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpHeaderBasic'
      jitdelivsqncgrpuuid            as JITDelivSqncGrpUUID,
      @ObjectModel.text.association:'_JITInternalStatusText'
      jitintprocessingstatus         as JITIntProcessingStatus,
      @ObjectModel.foreignKey.association:'_JITSequenceNumberChkRule'
      jitsequencenumbercheckrule     as JITSequenceNumberCheckRule,
      _JITDelivSqncGrpHeaderBasic,
      _JITSequenceNumberChkRule,
      _JITInternalStatusText,
      _JITDelivSqncGrpSqncNmbrSts
}
```
