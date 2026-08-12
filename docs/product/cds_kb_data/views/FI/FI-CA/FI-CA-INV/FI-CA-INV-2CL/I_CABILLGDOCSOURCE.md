---
name: I_CABILLGDOCSOURCE
description: "This CDS view retrieves the source items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: On which billed items is the billing document based? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCSOURCE')/$value
semantic_en: "This CDS view retrieves the source items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: On which billed items is the billing document based? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Quellposition des Abrechnungsbelegs — CDS view giao diện (transactional data) dựa trên dfkkinvbill_s."
keywords:
  - "quellposition"
  - "des"
  - "abrechnungsbelegs"
  - "billg"
  - "document"
  - "source"
  - "item"
  - "grouping"
  - "items"
  - "record"
  - "type"
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
  - bo:purchaseorder
---
# I_CABILLGDOCSOURCE

**This CDS view retrieves the source items of a billing document in Convergent Invoicing. This CDS view provides the data to answer the following business questions: On which billed items is the billing document based? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCSOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocument` | ✓ | |  | `billdocno` | `CHAR(12)` | Number of Billing Document |
| `CABillgDocSourceItem` | ✓ | |  | `billdocsrcitem` | `NUMC(8)` | Sequence Number of Source Item |
| `CABillgGroupingSourceItems` |  | |  | `src_group` | `CHAR(8)` | Grouping of Source Items |
| `CABillgRecordType` |  | |  | `billdocrectype` | `CHAR(2)` | Record Type in Billing Document |
| `CABillgIsDocumentSimulated` |  | |  | `simulated` | `CHAR(1)` | Billing Document Is Simulated |
| `CABillgDocCreationDate` |  | |  | `crdate` | `DATS(8)` | Date on Which Billing Document Was Created |
| `CACnsmpnItmClass` |  | |  | `cast(citcat as citcat_gfn_kk preserving type)` | `CHAR(4)` | Consumption Item Class |
| `CABllbleItmClass` |  | |  | `bitcat` | `CHAR(4)` | Billable Item Class |
| `CABllbleItmStatus` |  | |  | `bitstatus` | `CHAR(1)` | Status of Billable Item |
| `CABllbleItmRecordType` |  | |  | `bitrectype` | `CHAR(2)` | Record Type of Billable Item |
| `CABllbleItmDatabaseTable` |  | |  | `cast(bit_dbtab as bit_dbtab_gfn_kk preserving type)` | `CHAR(16)` | Billable Item Database Table |
| `CABillgGroupingBillableItem` |  | |  | `bit_grpno` | `NUMC(8)` | Grouping of Billable Items in Billing Document |
| `CABillgSubprocess` |  | |  | `subprocess` | `CHAR(4)` | Subprocess of Billing |
| `CABllbleItmType` |  | |  | `bittype` | `CHAR(4)` | Type of Billable Item |
| `CABllbleItmSourceTransType` |  | |  | `cast(srctatype as srctatype_gfn_kk preserving type)` | `CHAR(5)` | Source Transaction Type |
| `CABillgSourceTransRefType` |  | |  | `srcreftype` | `CHAR(1)` | Type of Reference to Source Transaction in Billing Document |
| `CABillgSourceTransRef` |  | |  | `cast(srcref as bill_srcref_kk_badi preserving type)` | `CHAR(22)` | Reference to Source Transaction in Billing Document |
| `CABllbleItmPrimary` |  | |  | `xprimary` | `CHAR(1)` | Primary Billable Item |
| `CABllbleItmPrimaryType` |  | |  | `reltype_primary` | `CHAR(2)` | Type of Relationship to Primary Item |
| `CABllbleItmOriginMonth` |  | |  | `cast(bitmonth as bitmonth_no_conv_kk )` | `NUMC(6)` | Month of Origin of Billable Item |
| `CABllbleItmCreationMonth` |  | |  | `cast(bitcrmonth as bitcrmonth_no_conv_kk )` | `NUMC(6)` | Month in Which Billable Item Was Created |
| `CABllbleItmAmount` |  | |  | `bit_amount` | `CURR(13)` | Amount of Billable Item |
| `CABllbleItmCurrency` |  | |  | `bit_curr` | `CUKY(5)` | Currency of Billable Item |
| `CABllbleItmNumber` |  | |  | `cast(bit_number as bit_number_gfn_kk preserving type)` | `INT4(10)` | Number of Billable Items |
| `_CABillgDocHeader` | | ✓ | | | | |
| `_CACnsmpnItmClass` | | ✓ | | | | |
| `_CABllbleItmClass` | | ✓ | | | | |
| `_CABllbleItmType` | | ✓ | | | | |
| `_CABllbleItmSrceTransType` | | ✓ | | | | |
| `_CABillgSubprocess` | | ✓ | | | | |
| `_CABillgRecordType` | | ✓ | | | | |
| `_CABllbleItmStatus` | | ✓ | | | | |
| `_CABllbleItmRecordType` | | ✓ | | | | |
| `_CABillgSourceTransRefType` | | ✓ | | | | |
| `_CABllbleItmPrimaryType` | | ✓ | | | | |
| `_CABllbleItmCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocHeader` | `I_CABillgDocHeader` | [1..1] |
| `_CACnsmpnItmClass` | `I_CACnsmpnItmClass` | [0..1] |
| `_CABllbleItmClass` | `I_CABllbleItmClass` | [0..1] |
| `_CABllbleItmType` | `I_CABllbleItmType` | [0..1] |
| `_CABllbleItmSrceTransType` | `I_CABllbleItmSrceTransType` | [0..1] |
| `_CABillgSubprocess` | `I_CABillgSubProcess` | [0..1] |
| `_CABillgRecordType` | `I_CABillgRecordType` | [0..1] |
| `_CABllbleItmStatus` | `I_CABllbleItmStatus` | [0..1] |
| `_CABllbleItmRecordType` | `I_CABllbleItmRecordType` | [0..1] |
| `_CABillgSourceTransRefType` | `I_CABillgSourceTransRefType` | [0..1] |
| `_CABllbleItmPrimaryType` | `I_CABllbleItmPrimaryType` | [0..1] |
| `_CABllbleItmCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCSOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCSOURCE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_s',
          role: #MAIN,
          viewElement: ['CABillgDocument', 'CABillgDocSourceItem'],
          tableElement: ['billdocno', 'billdocsrcitem']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgDocSourceItem',
  sapObjectNodeType.name: 'ContrAcctgBillgDocSourceItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Quellposition des Abrechnungsbelegs'
define view entity I_CABillgDocSource
  as select from dfkkinvbill_s as invbill_s

  association [1..1] to I_CABillgDocHeader          as _CABillgDocHeader          on $projection.CABillgDocument = _CABillgDocHeader.CABillgDocument
  association [0..1] to I_CACnsmpnItmClass          as _CACnsmpnItmClass          on $projection.CACnsmpnItmClass = _CACnsmpnItmClass.CACnsmpnItmClass
  association [0..1] to I_CABllbleItmClass          as _CABllbleItmClass          on $projection.CABllbleItmClass = _CABllbleItmClass.CABllbleItmClass
  association [0..1] to I_CABllbleItmType           as _CABllbleItmType           on $projection.CABllbleItmType = _CABllbleItmType.CABllbleItmType
  association [0..1] to I_CABllbleItmSrceTransType  as _CABllbleItmSrceTransType  on $projection.CABllbleItmSourceTransType = _CABllbleItmSrceTransType.CABllbleItmSourceTransType
  association [0..1] to I_CABillgSubProcess         as _CABillgSubprocess         on $projection.CABillgSubprocess = _CABillgSubprocess.CABillgSubprocess
  association [0..1] to I_CABillgRecordType         as _CABillgRecordType         on $projection.CABillgRecordType = _CABillgRecordType.CABillgRecordType
  association [0..1] to I_CABllbleItmStatus         as _CABllbleItmStatus         on $projection.CABllbleItmStatus = _CABllbleItmStatus.CABllbleItmStatus
  association [0..1] to I_CABllbleItmRecordType     as _CABllbleItmRecordType     on $projection.CABllbleItmRecordType = _CABllbleItmRecordType.CABllbleItmRecordType
  association [0..1] to I_CABillgSourceTransRefType as _CABillgSourceTransRefType on $projection.CABillgSourceTransRefType = _CABillgSourceTransRefType.CABillgSourceTransRefType
  association [0..1] to I_CABllbleItmPrimaryType    as _CABllbleItmPrimaryType    on $projection.CABllbleItmPrimaryType = _CABllbleItmPrimaryType.CABllbleItmPrimaryType
  association [0..1] to I_Currency                  as _CABllbleItmCurrency       on $projection.CABllbleItmCurrency = _CABllbleItmCurrency.Currency
{
      @ObjectModel.foreignKey.association: '_CABillgDocHeader'
  key billdocno                                             as CABillgDocument,
  key billdocsrcitem                                        as CABillgDocSourceItem,
      src_group                                             as CABillgGroupingSourceItems,
      @ObjectModel.foreignKey.association: '_CABillgRecordType'
      billdocrectype                                        as CABillgRecordType,
      simulated                                             as CABillgIsDocumentSimulated,
      crdate                                                as CABillgDocCreationDate,
      @ObjectModel.foreignKey.association: '_CACnsmpnItmClass'
      cast(citcat as citcat_gfn_kk preserving type)         as CACnsmpnItmClass,
      @ObjectModel.foreignKey.association: '_CABllbleItmClass'
      bitcat                                                as CABllbleItmClass,
      @ObjectModel.foreignKey.association: '_CABllbleItmStatus'
      bitstatus                                             as CABllbleItmStatus,
      @ObjectModel.foreignKey.association: '_CABllbleItmRecordType'
      bitrectype                                            as CABllbleItmRecordType,
      cast(bit_dbtab as bit_dbtab_gfn_kk preserving type)   as CABllbleItmDatabaseTable,
      bit_grpno                                             as CABillgGroupingBillableItem,
      @ObjectModel.foreignKey.association: '_CABillgSubprocess'
      subprocess                                            as CABillgSubprocess,
      @ObjectModel.foreignKey.association: '_CABllbleItmType'
      bittype                                               as CABllbleItmType,
      @ObjectModel.foreignKey.association: '_CABllbleItmSrceTransType'
      cast(srctatype as srctatype_gfn_kk preserving type)   as CABllbleItmSourceTransType,
      @ObjectModel.foreignKey.association: '_CABillgSourceTransRefType'
      srcreftype                                            as CABillgSourceTransRefType,
      cast(srcref as bill_srcref_kk_badi preserving type)   as CABillgSourceTransRef,
      xprimary                                              as CABllbleItmPrimary,
      @ObjectModel.foreignKey.association: '_CABllbleItmPrimaryType'
      reltype_primary                                       as CABllbleItmPrimaryType,
      @Semantics.calendar.yearMonth: true
      cast(bitmonth as bitmonth_no_conv_kk )                 as CABllbleItmOriginMonth,
      @Semantics.calendar.yearMonth: true
      cast(bitcrmonth as bitcrmonth_no_conv_kk )             as CABllbleItmCreationMonth,
      @Semantics.amount.currencyCode: 'CABllbleItmCurrency'
      bit_amount                                            as CABllbleItmAmount,
      @ObjectModel.foreignKey.association: '_CABllbleItmCurrency'
      bit_curr                                              as CABllbleItmCurrency,
      cast(bit_number as bit_number_gfn_kk preserving type) as CABllbleItmNumber,

      _CABillgDocHeader,
      _CACnsmpnItmClass,
      _CABllbleItmClass,
      _CABllbleItmType,
      _CABllbleItmSrceTransType,
      _CABillgSubprocess,
      _CABillgRecordType,
      _CABllbleItmStatus,
      _CABllbleItmRecordType,
      _CABillgSourceTransRefType,
      _CABllbleItmPrimaryType,
      _CABllbleItmCurrency
}
```
