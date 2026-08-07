---
name: I_JNTVNTRBUSINESSPARTNER
description: JNTVNTRBusiness Partner
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - business-partner
  - partner
  - component:CA-JVA
  - lob:Cross-Application Components
  - bo:BusinessPartner
---
# I_JNTVNTRBUSINESSPARTNER

**JNTVNTRBusiness Partner**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |
| `JointVenturePartner` | ✓ | |  | `cast( jvp.partn as jv_part_cds preserving type )` |
| `JointVenturePartnerShortText` |  | |  | `cast( left(_BusinessPartner.BusinessPartnerName, 35) as jv_part_nm preserving type )` |
| `JointVenturePartner2ShortText` |  | |  | `cast( left(_BusinessPartner.BusinessPartnerName, 40) as jva_partner_name preserving type )` |
| `JntVntrIntcoCode` |  | |  | `intcocd` |
| `JntVntrCashCallThld` |  | |  | `ccthresh` |
| `JntVntrHardCopyBillgIsSupp` |  | |  | `paper` |
| `JntVntrOwnrIsEDITo` |  | |  | `edi` |
| `JntVentureIsConvenienceNetting` |  | |  | `convnetind` |
| `JntVntrBillgFormat` |  | |  | `bformat` |
| `TaxCode` |  | |  | `taxcode` |
| `EDIPartner` |  | |  | `edicomp` |
| `EDIReceiver` |  | |  | `edicomp` |
| `JntVntrPartnerProcessGrp` |  | |  | `ppgroup` |
| `JntVntrPartEquityCashCallThld` |  | |  | `veccthresh` |
| `JntVntrPartProjCashCallThld` |  | |  | `pjccthresh` |
| `PersonResponsible` |  | |  | `person` |
| `ResponsibleContact` |  | |  | `person` |
| `PhoneNumber` |  | |  | `telfn` |
| `ContactPhoneNumber` |  | |  | `telfn` |
| `JntVntrGeneratedExpndtrSet` |  | |  | `t819_only` |
| `Currency` |  | | `_CompanyCode` | `Currency` |
| `JntVntrBillgThldDebit` |  | |  | `billthres` |
| `JntVntrBillgThldCredit` |  | |  | `billthresc` |
| `JntVntrBillgThldIsActive` |  | |  | `billthresa` |
| `JntVntrBillgReportsAreSpprsd` |  | |  | `billthresx` |
| `JntVntrSeparateBillgIsPrepared` |  | |  | `billthress` |
| `_CompanyCode` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BPDataControllerUsage` | `I_BPDataControllerUsage` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVBP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Joint Venture Business Partner'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'JointVenturePartner'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics.internalName:#LOCAL
@Analytics.settings.valueHelp.supressInitialValue: true

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #UI_PROVIDER_PROJECTION_SOURCE ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_JntVntrBusinessPartner
  as select from t8jo as jvp

  association [0..1] to I_CompanyCode     as _CompanyCode     on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.JointVenturePartner = _BusinessPartner.BusinessPartner
  association [0..*] to I_BPDataControllerUsage as _BPDataControllerUsage on $projection.JointVenturePartner = _BPDataControllerUsage.BusinessPartner
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JointVentureCompanyCodeVH',
                          element: 'CompanyCode' }
             }]
  key jvp.bukrs                                                                                  as CompanyCode,
        @ObjectModel.text.element: ['JointVenturePartner2ShortText']
        @Consumption.valueHelpDefinition: [ 
               { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
               }]  
               
  key cast( jvp.partn as jv_part_cds preserving type )                                           as JointVenturePartner,
      @Semantics.text: true
      cast( left(_BusinessPartner.BusinessPartnerName, 35) as jv_part_nm preserving type )       as JointVenturePartnerShortText,
      @Semantics.text: true
      cast( left(_BusinessPartner.BusinessPartnerName, 40) as jva_partner_name preserving type ) as JointVenturePartner2ShortText,
      jvp.intcocd                                                                                as JntVntrIntcoCode,
      jvp.ccthresh                                                                               as JntVntrCashCallThld,
      jvp.paper                                                                                  as JntVntrHardCopyBillgIsSupp,
      jvp.edi                                                                                    as JntVntrOwnrIsEDITo,
      jvp.convnetind                                                                             as JntVentureIsConvenienceNetting,
      jvp.bformat                                                                                as JntVntrBillgFormat,
      jvp.taxcode                                                                                as TaxCode,
      // Due to data domain incompantibility reason this field should not be used. Use "EDIReceiver" instead.
      jvp.edicomp                                                                                as EDIPartner,
      jvp.edicomp                                                                                as EDIReceiver,
      jvp.ppgroup                                                                                as JntVntrPartnerProcessGrp,
      jvp.veccthresh                                                                             as JntVntrPartEquityCashCallThld,
      jvp.pjccthresh                                                                             as JntVntrPartProjCashCallThld,
      // Due to data domain incompantibility reason this field should not be used. Use "ResponsibleContact" instead.
      jvp.person                                                                                 as PersonResponsible,
      jvp.person                                                                                 as ResponsibleContact,
      // Due to data domain incompantibility reason this field should not be used. Use "ContactPhoneNumber" instead.
      jvp.telfn                                                                                  as PhoneNumber,
      jvp.telfn                                                                                  as ContactPhoneNumber,
      jvp.t819_only                                                                              as JntVntrGeneratedExpndtrSet,
      _CompanyCode.Currency                                                                      as Currency,
      @Semantics.amount.currencyCode : 'Currency'
      jvp.billthres                                                                              as JntVntrBillgThldDebit,
      @Semantics.amount.currencyCode : 'Currency'
      jvp.billthresc                                                                             as JntVntrBillgThldCredit,
      jvp.billthresa                                                                             as JntVntrBillgThldIsActive,
      jvp.billthresx                                                                             as JntVntrBillgReportsAreSpprsd,
      jvp.billthress                                                                             as JntVntrSeparateBillgIsPrepared,

      _CompanyCode,
      _BusinessPartner
}
```
