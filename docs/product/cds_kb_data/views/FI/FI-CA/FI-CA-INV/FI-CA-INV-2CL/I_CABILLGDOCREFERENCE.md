---
name: I_CABILLGDOCREFERENCE
description: "This CDS view retrieves the object relationships of a billing document in Convergent Invoicing. The object relationships can contain links to related objects. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value
semantic_en: "This CDS view retrieves the object relationships of a billing document in Convergent Invoicing. The object relationships can contain links to related objects. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Objektverknüpfungen zum Abrechnungsbeleg — CDS view giao diện (transactional data) dựa trên dfkkinvbill_x."
keywords:
  - "objektverknüpfungen"
  - "zum"
  - "abrechnungsbeleg"
  - "invcg"
  - "reference"
  - "object"
  - "billg"
  - "creation"
  - "date"
  - "document"
  - "simulated"
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CABILLGDOCREFERENCE

**This CDS view retrieves the object relationships of a billing document in Convergent Invoicing. The object relationships can contain links to related objects. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgReferenceObject` | ✓ | |  | `refobjname` | `CHAR(10)` | Reference Object |
| `CAReferenceObjectID` | ✓ | |  | `refobjvalue` | `CHAR(40)` | Reference Object ID |
| `CABillgDocCreationDate` | ✓ | |  | `crdate` | `DATS(8)` | Date on Which Billing Document Was Created |
| `CABillgDocument` | ✓ | |  | `billdocno` | `CHAR(12)` | Number of Billing Document |
| `CABillgIsDocumentSimulated` |  | |  | `simulated` | `CHAR(1)` | Billing Document Is Simulated |
| `CAReferenceObjectAddlText` |  | |  | `cast(refobjvalue2 as inv_refobjvalue2_gfn_kk preserving type)` | `CHAR(128)` | Additional Data for Reference Object |
| `_CAInvcgReferenceObj` | | ✓ | | | | |
| `_CABillgDocHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgReferenceObj` | `I_CAInvcgReferenceObj` | [0..1] |
| `_CABillgDocHeader` | `I_CABillgDocHeader` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_x',
          role: #MAIN,
          viewElement: ['CAInvcgReferenceObject', 'CAReferenceObjectID', 'CABillgDocCreationDate', 'CABillgDocument'],
          tableElement: ['refobjname', 'refobjvalue', 'crdate', 'billdocno']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
//  representativeKey: 'CAReferenceObjectID',
  sapObjectNodeType.name: 'ContrAcctgBillgDocReference',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Objektverknüpfungen zum Abrechnungsbeleg'
define view entity I_CABillgDocReference
  as select from dfkkinvbill_x as invbill_x
  association [0..1] to I_CAInvcgReferenceObj as _CAInvcgReferenceObj on $projection.CAInvcgReferenceObject = _CAInvcgReferenceObj.CAInvcgReferenceObject
  association [1..1] to I_CABillgDocHeader    as _CABillgDocHeader    on $projection.CABillgDocument = _CABillgDocHeader.CABillgDocument
{
      @ObjectModel.foreignKey.association: '_CAInvcgReferenceObj'
  key refobjname                                                    as CAInvcgReferenceObject,
  key refobjvalue                                                   as CAReferenceObjectID,
      @Semantics.systemDate.createdAt: true
  key crdate                                                        as CABillgDocCreationDate,
      @ObjectModel.foreignKey.association: '_CABillgDocHeader'
  key billdocno                                                     as CABillgDocument,
      simulated                                                     as CABillgIsDocumentSimulated,
      cast(refobjvalue2 as inv_refobjvalue2_gfn_kk preserving type) as CAReferenceObjectAddlText,

      _CABillgDocHeader,
      _CAInvcgReferenceObj
}
```
