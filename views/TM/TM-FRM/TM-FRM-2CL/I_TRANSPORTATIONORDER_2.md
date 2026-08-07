---
name: I_TRANSPORTATIONORDER_2
description: Transportationorder 2
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - transport
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORTATIONORDER_2

**Transportationorder 2**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `TransportationOrder` |  | |  | `cast(tor_id as /scmtms/vdm_tor_id preserving type )` |  |  |
| `TransportationOrderType` |  | |  | `cast(tor_type as /scmtms/vdm_tor_type preserving type )` |  |  |
| `TransportationOrderCategory` |  | |  | `cast(tor_cat as /scmtms/vdm_tor_category preserving type )` |  |  |
| `TransportationShippingType` |  | |  | `shipping_type` |  |  |
| `MovementType` |  | |  | `movement_type` |  |  |
| `TransportationMode` |  | |  | `cast(trmodcod as /scmtms/vdm_tor_trmodcode preserving type )` |  |  |
| `TransportationModeCategory` |  | |  | `cast(trmodcat as /scmtms/vdm_tor_trmod_cat preserving type )` |  |  |
| `TranspOrdPalletSpacesQty` |  | |  | `cast(normloadconsval as /scmtms/vdm_normloadconsval preserving type )` |  |  |
| `TranspOrdPalletSpacesUnit` |  | |  | `normloadconsuom` |  |  |
| `TranspOrdLoadMetersQty` |  | |  | `cast(addnormloadconsval as /scmtms/vdm_addnormloadconsval preserving type )` |  |  |
| `TranspOrdLoadMetersUnit` |  | |  | `addnormloadconsuom` |  |  |
| `TranspOrdDistance` |  | |  | `cast(total_distance_km as /scmtms/vdm_tor_dstnc preserving type)` |  |  |
| `TranspOrdDistanceUnit` |  | |  | `cast('KM' as /scmtms/vdm_tor_dstnc_unit)` |  |  |
| `TranspOrdNetDuration` |  | |  | `cast(total_duration_net as /scmtms/vdm_tor_net_duration)` |  |  |
| `TranspOrdNetDurationUnit` |  | |  | `cast('H' as /scmtms/vdm_dsp_time_unit)` |  |  |
| `CarrierUUID` |  | |  | `cast(tsp as /scmtms/vdm_carrier_party_key preserving type)` |  |  |
| `Carrier` |  | |  | `cast(tspid as /scmtms/pty_carrier preserving type)` |  |  |
| `CarrierAddressID` |  | |  | `cast (tsp_address_id as /scmtms/vdm_carrier_address_id preserving type )` |  |  |
| `StandardCarrierAlphaCode` |  | |  | `tsp_scac` |  |  |
| `TranspOrdExecutingCarrierUUID` |  | |  | `cast(tspexec_key as /scmtms/vdm_tspexec_uuid preserving type)` |  |  |
| `TranspOrdExecutingCarrier` |  | |  | `tspexecid` |  |  |
| `ExecutingCarrierAddressID` |  | |  | `cast (tspexec_address_id as /scmtms/vdm_execarr_address_id preserving type )` |  |  |
| `ShipperUUID` |  | |  | `cast(shipper_key as /scmtms/vdm_shipper_key preserving type)` |  |  |
| `Shipper` |  | |  | `cast(shipperid as /scmtms/pty_shipper preserving type)` |  |  |
| `ShipperAddressID` |  | |  | `cast (sp_address_id as /scmtms/vdm_shipper_address_id preserving type )` |  |  |
| `ConsigneeUUID` |  | |  | `cast(consignee_key as /scmtms/vdm_consignee_key preserving type)` |  |  |
| `Consignee` |  | |  | `cast(consigneeid as /scmtms/pty_consignee preserving type)` |  |  |
| `ConsigneeAddressID` |  | |  | `cast (cp_address_id as /scmtms/vdm_consignee_addr_id preserving type )` |  |  |
| `TranspPurgOrg` |  | |  | `purch_org` |  |  |
| `TranspPurgGroup` |  | |  | `purch_grp` |  |  |
| `PurgOrgCompanyCode` |  | |  | `cast( purch_company_code as bukrs preserving type )` |  |  |
| `CarrierAccountNumber` |  | |  | `eikto` |  |  |
| `TranspMeansOfTransport` |  | |  | `cast(mtr as /sapapo/tr_traty preserving type )` |  |  |
| `TranspOrdPartnerReference` |  | |  | `partner_ref_id` |  |  |
| `MasterBillOfLading` |  | |  | `partner_mbl_id` |  |  |
| `TranspOrdResponsiblePerson` |  | |  | `resp_person` |  |  |
| `TranspOrdHasMltplExectgPties` |  | |  | `multi_exe_pty` |  |  |
| `TranspOrdInvoicingCarrierLevel` |  | |  | `pymt_ind` |  |  |
| `TranspOrdOrderDateTime` |  | |  | `cast(order_date as /scmtms/vdm_tor_order_datetime preserving type)` |  |  |
| `TranspOrdLifeCycleStatus` |  | |  | `cast(lifecycle as /scmtms/vdm_tor_lc_status preserving type )` |  |  |
| `TranspOrderSubcontrgSts` |  | |  | `subcontracting` |  |  |
| `TransportationOrderConfSts` |  | |  | `confirmation` |  |  |
| `TransportationOrderExecSts` |  | |  | `execution` |  |  |
| `TranspOrdGoodsMovementStatus` |  | |  | `dlv_goods_mvmnt` |  |  |
| `TranspOrdWhseProcessingStatus` |  | |  | `wh_processing_status` |  |  |
| `TranspOrderDngrsGdsSts` |  | |  | `cast(dg_status as /scmtms/vdm_tor_dg_status preserving type )` |  |  |
| `TranspOrdPlanningBlock` |  | |  | `cast(blk_plan as /scmtms/vdm_block_planning preserving type )` |  |  |
| `TranspOrdExecutionIsBlocked` |  | |  | `cast(blk_exec as /scmtms/vdm_block_execution preserving type )` |  |  |
| `TranspOrdPlanningStatus` |  | |  | `cast(plan_status_root as /scmtms/vdm_tor_pln_status preserving type )` |  |  |
| `TransportationOrderCrtnType` |  | |  | `creation_type` |  |  |
| `CreatedByUser` |  | |  | `cast(created_by as vdm_createdbyuserid preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast(created_on as /scmtms/vdm_creation_datetme preserving type)` |  |  |
| `LastChangedByUser` |  | |  | `cast(changed_by as vdm_lastchangedbyuserid preserving type )` |  |  |
| `ChangedDateTime` |  | |  | `cast(changed_on as /scmtms/vdm_changed_datetme preserving type)` |  |  |
| `_Consignee` | | ✓ | | | | |
| `_Shipper` | | ✓ | | | | |
| `_Carrier` | | ✓ | | | | |
| `_ExectgCarrier` | | ✓ | | | | |
| `_PurchasingCompanyCode` | | ✓ | | | | |
| `_TransportationOrderType` | | ✓ | | | | |
| `_TransportationOrderCategory` | | ✓ | | | | |
| `_TranspOrdPlanningBlock` | | ✓ | | | | |
| `_TranspOrdExecutionIsBlocked` | | ✓ | | | | |
| `_TranspSCACCode` | | ✓ | | | | |
| `_TranspOrdShippingType` | | ✓ | | | | |
| `_MovementType` | | ✓ | | | | |
| `_TranspOrdLifeCycleStatus` | | ✓ | | | | |
| `_TransportationOrderExecSts` | | ✓ | | | | |
| `_TranspOrdDngrsGdsStatus` | | ✓ | | | | |
| `_TranspOrdConfirmationStatus` | | ✓ | | | | |
| `_TranspOrdSubcontractingSts` | | ✓ | | | | |
| `_TranspOrdWhseProcgStatus` | | ✓ | | | | |
| `_TranspOrdGoodsMvtStatus` | | ✓ | | | | |
| `_TranspOrdPlanningStatus` | | ✓ | | | | |
| `_MeansOfTransport` | | ✓ | | | | |
| `_TransportationMode` | | ✓ | | | | |
| `_TransportationModeCategory` | | ✓ | | | | |
| `_CreatedBy` | | ✓ | | | | |
| `_LastChangedBy` | | ✓ | | | | |
| `_TranspOrdResponsiblePerson` | | ✓ | | | | |
| `_TranspOrdCreationType` | | ✓ | | | | |
| `_TranspOrdInvcgCarrierLevel` | | ✓ | | | | |
| `_TranspOrdPalletSpacesUnit` | | ✓ | | | | |
| `_TranspOrdLoadMetersUnit` | | ✓ | | | | |
| `_TranspOrdNetDurationUnit` | | ✓ | | | | |
| `_TransportationOrderItem` | | ✓ | | | | |
| `_TransportationOrderStop` | | ✓ | | | | |
| `_TransportationOrderBP` | | ✓ | | | | |
| `_TranspOrdDocumentReference` | | ✓ | | | | |
| `_TransportationOrderEvent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Consignee` | `I_BusinessPartner` | [0..1] |
| `_Shipper` | `I_BusinessPartner` | [0..1] |
| `_Carrier` | `I_BusinessPartner` | [0..1] |
| `_ExectgCarrier` | `I_BusinessPartner` | [0..1] |
| `_PurchasingCompanyCode` | `I_CompanyCode` | [0..1] |
| `_TransportationOrderType` | `I_TransportationOrderType_2` | [0..1] |
| `_TransportationOrderCategory` | `I_TranspOrderCategory_2` | [0..1] |
| `_TranspOrdPlanningBlock` | `I_TranspOrdPlanningBlock` | [0..1] |
| `_TranspOrdExecutionIsBlocked` | `I_TranspOrdExecutionIsBlocked` | [0..1] |
| `_TranspSCACCode` | `I_TranspSCACCode` | [0..1] |
| `_TranspOrdShippingType` | `I_TranspOrdShippingType_2` | [0..1] |
| `_MovementType` | `I_TranspMovementType` | [0..1] |
| `_TranspOrdLifeCycleStatus` | `I_TranspOrdLifeCycleStatus_2` | [0..1] |
| `_TransportationOrderExecSts` | `I_TranspOrdExecStatus_2` | [0..1] |
| `_TranspOrdDngrsGdsStatus` | `I_TranspOrdDngrsGdsStatus` | [0..1] |
| `_TranspOrdConfirmationStatus` | `I_TranspOrdConfirmationStatus` | [0..1] |
| `_TranspOrdSubcontractingSts` | `I_TranspOrdSubcontrgStatus_2` | [0..1] |
| `_TranspOrdWhseProcgStatus` | `I_TranspOrdWhseProcgStatus` | [0..1] |
| `_TranspOrdGoodsMvtStatus` | `I_TranspOrdGoodsMvtStatus` | [0..1] |
| `_TranspOrdPlanningStatus` | `I_TranspOrdPlanningStatus_2` | [0..1] |
| `_MeansOfTransport` | `I_TranspMeansOfTransport` | [0..1] |
| `_TransportationMode` | `I_TransportationMode_2` | [0..1] |
| `_TransportationModeCategory` | `I_TransportationModeCategory` | [0..1] |
| `_CreatedBy` | `I_User` | [0..1] |
| `_LastChangedBy` | `I_User` | [0..1] |
| `_TranspOrdResponsiblePerson` | `I_User` | [0..1] |
| `_TranspOrdCreationType` | `I_TranspOrdCreationType` | [0..1] |
| `_TranspOrdInvcgCarrierLevel` | `I_TranspOrdInvcgCarrierLevel` | [0..1] |
| `_TranspOrdPalletSpacesUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdLoadMetersUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspOrdNetDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Extension` | `E_TransportationOrder` | [1] |

## Source Code

```abap
@EndUserText:   {   label:              'Transportation Order'}
@ObjectModel:   {   sapObjectNodeType.name: 'TransportationOrder',
                    representativeKey:  'TransportationOrderUUID',
                    compositionRoot:    true,
                    semanticKey:        [ 'TransportationOrder' ],
                    usageType:          { serviceQuality: #A,
                                          sizeCategory:   #XL,
                                          dataClass:      #TRANSACTIONAL},
                    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                    modelingPattern: #ANALYTICAL_DIMENSION}
@VDM:           {   viewType:           #BASIC,
                    lifecycle.contract.type: #PUBLIC_LOCAL_API}
@AccessControl: {   authorizationCheck: #MANDATORY,
                    personalData.blocking:#('TRANSACTIONAL_DATA'),
                    privilegedAssociations:  [  '_CreatedBy', '_LastChangedBy', '_TranspOrdResponsiblePerson' ]}
@Metadata.ignorePropagatedAnnotations:true


define root view entity I_TransportationOrder_2
  as select from /scmtms/d_torrot as root
  /* Business Object related Node Associations*/
  composition [0..*] of I_TransportationOrderItem_2   as _TransportationOrderItem
  composition [0..*] of I_TransportationOrderStop_2   as _TransportationOrderStop
  composition [0..*] of I_TransportationOrderBP_2     as _TransportationOrderBP
  composition [0..*] of I_TranspOrdDocRef_2           as _TranspOrdDocumentReference
  composition [0..*] of I_TransportationOrderEvent    as _TransportationOrderEvent

  association [0..1] to I_BusinessPartner             as _Consignee                   on $projection.Consignee = _Consignee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _Shipper                     on $projection.Shipper = _Shipper.BusinessPartner
  association [0..1] to I_BusinessPartner             as _Carrier                     on $projection.Carrier = _Carrier.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ExectgCarrier               on $projection.TranspOrdExecutingCarrier = _ExectgCarrier.BusinessPartner
  association [0..1] to I_CompanyCode                 as _PurchasingCompanyCode       on $projection.PurgOrgCompanyCode = _PurchasingCompanyCode.CompanyCode

  /* Foreign Key and Text Associations */
  association [0..1] to I_TransportationOrderType_2   as _TransportationOrderType     on $projection.TransportationOrderType = _TransportationOrderType.TransportationOrderType
  association [0..1] to I_TranspOrderCategory_2       as _TransportationOrderCategory on $projection.TransportationOrderCategory = _TransportationOrderCategory.TransportationOrderCategory
  association [0..1] to I_TranspOrdPlanningBlock      as _TranspOrdPlanningBlock      on $projection.TranspOrdPlanningBlock = _TranspOrdPlanningBlock.TranspOrdPlanningBlock
  association [0..1] to I_TranspOrdExecutionIsBlocked as _TranspOrdExecutionIsBlocked on $projection.TranspOrdExecutionIsBlocked = _TranspOrdExecutionIsBlocked.TranspOrdExecutionIsBlocked
  association [0..1] to I_TranspSCACCode              as _TranspSCACCode              on $projection.StandardCarrierAlphaCode = _TranspSCACCode.TranspSCACCode
  association [0..1] to I_TranspOrdShippingType_2     as _TranspOrdShippingType       on $projection.TransportationShippingType = _TranspOrdShippingType.TranspOrdShippingType
  association [0..1] to I_TranspMovementType          as _MovementType                on $projection.MovementType = _MovementType.MovementType
  association [0..1] to I_TranspOrdLifeCycleStatus_2  as _TranspOrdLifeCycleStatus    on $projection.TranspOrdLifeCycleStatus = _TranspOrdLifeCycleStatus.TranspOrdLifeCycleStatus
  association [0..1] to I_TranspOrdExecStatus_2       as _TransportationOrderExecSts  on $projection.TransportationOrderExecSts = _TransportationOrderExecSts.TransportationOrderExecSts
  association [0..1] to I_TranspOrdDngrsGdsStatus     as _TranspOrdDngrsGdsStatus     on $projection.TranspOrderDngrsGdsSts = _TranspOrdDngrsGdsStatus.TranspOrderDngrsGdsSts
  association [0..1] to I_TranspOrdConfirmationStatus as _TranspOrdConfirmationStatus on $projection.TransportationOrderConfSts = _TranspOrdConfirmationStatus.TransportationOrderConfSts
  association [0..1] to I_TranspOrdSubcontrgStatus_2  as _TranspOrdSubcontractingSts  on $projection.TranspOrderSubcontrgSts = _TranspOrdSubcontractingSts.TranspOrderSubcontrgSts
  association [0..1] to I_TranspOrdWhseProcgStatus    as _TranspOrdWhseProcgStatus    on $projection.TranspOrdWhseProcessingStatus = _TranspOrdWhseProcgStatus.TranspOrdWhseProcessingStatus
  association [0..1] to I_TranspOrdGoodsMvtStatus     as _TranspOrdGoodsMvtStatus     on $projection.TranspOrdGoodsMovementStatus = _TranspOrdGoodsMvtStatus.TranspOrdGoodsMovementStatus
  association [0..1] to I_TranspOrdPlanningStatus_2   as _TranspOrdPlanningStatus     on $projection.TranspOrdPlanningStatus = _TranspOrdPlanningStatus.TranspOrdPlanningStatus
  association [0..1] to I_TranspMeansOfTransport      as _MeansOfTransport            on $projection.TranspMeansOfTransport = _MeansOfTransport.TranspMeansOfTransport
  association [0..1] to I_TransportationMode_2        as _TransportationMode          on $projection.TransportationMode = _TransportationMode.TransportationMode
  association [0..1] to I_TransportationModeCategory  as _TransportationModeCategory  on $projection.TransportationModeCategory = _TransportationModeCategory.TransportationModeCategory
  association [0..1] to I_User                        as _CreatedBy                   on $projection.CreatedByUser = _CreatedBy.UserID
  association [0..1] to I_User                        as _LastChangedBy               on $projection.LastChangedByUser = _LastChangedBy.UserID
  association [0..1] to I_User                        as _TranspOrdResponsiblePerson  on $projection.TranspOrdResponsiblePerson = _TranspOrdResponsiblePerson.UserID
  association [0..1] to I_TranspOrdCreationType       as _TranspOrdCreationType       on $projection.TransportationOrderCrtnType = _TranspOrdCreationType.TransportationOrderCrtnType
  association [0..1] to I_TranspOrdInvcgCarrierLevel  as _TranspOrdInvcgCarrierLevel  on $projection.TranspOrdInvoicingCarrierLevel = _TranspOrdInvcgCarrierLevel.TranspOrdInvoicingCarrierLevel
  association [0..1] to I_UnitOfMeasure               as _TranspOrdPalletSpacesUnit   on $projection.TranspOrdPalletSpacesUnit = _TranspOrdPalletSpacesUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _TranspOrdLoadMetersUnit     on $projection.TranspOrdLoadMetersUnit = _TranspOrdLoadMetersUnit.UnitOfMeasure
  /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */
  association [0..1] to I_UnitOfMeasure               as _TranspOrdNetDurationUnit    on $projection.TranspOrdNetDurationUnit = _TranspOrdNetDurationUnit.UnitOfMeasure

  //Extension Association
  association [1]    to E_TransportationOrder            as _Extension                on $projection.TransportationOrderUUID = _Extension.TransportationOrderUUID


{
  key cast(db_key          as /scmtms/vdm_tor_db_key preserving type)              as TransportationOrderUUID,
      cast(tor_id as /scmtms/vdm_tor_id preserving type )                          as TransportationOrder,

      // Key Characteristics
      @ObjectModel.foreignKey.association: '_TransportationOrderType'
      cast(tor_type as /scmtms/vdm_tor_type preserving type )                      as TransportationOrderType,
      @ObjectModel.foreignKey.association: '_TransportationOrderCategory'
      cast(tor_cat as /scmtms/vdm_tor_category preserving type )                   as TransportationOrderCategory,
      @ObjectModel.foreignKey.association: '_TranspOrdShippingType'
      shipping_type                                                                as TransportationShippingType,
      @ObjectModel.foreignKey.association: '_MovementType'
      movement_type                                                                as MovementType,
      @ObjectModel.foreignKey.association: '_TransportationMode'
      cast(trmodcod as /scmtms/vdm_tor_trmodcode preserving type )                 as TransportationMode,
      @ObjectModel.foreignKey.association: '_TransportationModeCategory'
      cast(trmodcat as /scmtms/vdm_tor_trmod_cat preserving type )                 as TransportationModeCategory,

      @Semantics.quantity.unitOfMeasure: 'TranspOrdPalletSpacesUnit'
      cast(normloadconsval as /scmtms/vdm_normloadconsval preserving type )        as TranspOrdPalletSpacesQty,
      @ObjectModel.foreignKey.association: '_TranspOrdPalletSpacesUnit'
      normloadconsuom                                                              as TranspOrdPalletSpacesUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdLoadMetersUnit'
      cast(addnormloadconsval as /scmtms/vdm_addnormloadconsval preserving type )  as TranspOrdLoadMetersQty,
      @ObjectModel.foreignKey.association: '_TranspOrdLoadMetersUnit'
      addnormloadconsuom                                                           as TranspOrdLoadMetersUnit,

      // Distance and Duration
      @Semantics.quantity.unitOfMeasure: 'TranspOrdDistanceUnit'
      cast(total_distance_km as /scmtms/vdm_tor_dstnc preserving type)             as TranspOrdDistance,
      cast('KM' as /scmtms/vdm_tor_dstnc_unit)                                     as TranspOrdDistanceUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspOrdNetDurationUnit'
      cast(total_duration_net as  /scmtms/vdm_tor_net_duration)                    as TranspOrdNetDuration,
      @ObjectModel.foreignKey.association: '_TranspOrdNetDurationUnit'
      cast('H' as /scmtms/vdm_dsp_time_unit)                                       as TranspOrdNetDurationUnit,

      // Parties
      @Semantics.uuid:true
      cast(tsp             as /scmtms/vdm_carrier_party_key preserving type)       as CarrierUUID,
      @ObjectModel.foreignKey.association: '_Carrier'
      cast(tspid           as /scmtms/pty_carrier preserving type)                 as Carrier,
      cast (tsp_address_id as /scmtms/vdm_carrier_address_id preserving type )     as CarrierAddressID,
      @ObjectModel.foreignKey.association: '_TranspSCACCode'
      tsp_scac                                                                     as StandardCarrierAlphaCode,
      cast(tspexec_key as /scmtms/vdm_tspexec_uuid preserving type)                as TranspOrdExecutingCarrierUUID,
      tspexecid                                                                    as TranspOrdExecutingCarrier,
      cast (tspexec_address_id as /scmtms/vdm_execarr_address_id preserving type ) as ExecutingCarrierAddressID,
      cast(shipper_key     as /scmtms/vdm_shipper_key preserving type)             as ShipperUUID,
      @ObjectModel.foreignKey.association: '_Shipper'
      cast(shipperid       as /scmtms/pty_shipper preserving type)                 as Shipper,
      cast (sp_address_id as /scmtms/vdm_shipper_address_id preserving type )      as ShipperAddressID,
      cast(consignee_key   as /scmtms/vdm_consignee_key preserving type)           as ConsigneeUUID,
      @ObjectModel.foreignKey.association: '_Consignee'
      cast(consigneeid     as /scmtms/pty_consignee preserving type)               as Consignee,
      cast (cp_address_id   as /scmtms/vdm_consignee_addr_id preserving type )     as ConsigneeAddressID,

      purch_org                                                                    as TranspPurgOrg,
      purch_grp                                                                    as TranspPurgGroup,

      @ObjectModel.foreignKey.association: '_PurchasingCompanyCode'
      cast( purch_company_code as bukrs preserving type )                          as PurgOrgCompanyCode,
      eikto                                                                        as CarrierAccountNumber,

      // Further Attributes
      @ObjectModel.foreignKey.association: '_MeansOfTransport'
      cast(mtr as /sapapo/tr_traty preserving type )                               as TranspMeansOfTransport,
      partner_ref_id                                                               as TranspOrdPartnerReference,
      partner_mbl_id                                                               as MasterBillOfLading,
      @ObjectModel.foreignKey.association: '_TranspOrdResponsiblePerson'
      resp_person                                                                  as TranspOrdResponsiblePerson,
      multi_exe_pty                                                                as TranspOrdHasMltplExectgPties,
      @ObjectModel.foreignKey.association: '_TranspOrdInvcgCarrierLevel'
      pymt_ind                                                                     as TranspOrdInvoicingCarrierLevel,
      cast(order_date as /scmtms/vdm_tor_order_datetime preserving type)           as TranspOrdOrderDateTime,

      // Status
      @ObjectModel.foreignKey.association: '_TranspOrdLifeCycleStatus'
      cast(lifecycle as /scmtms/vdm_tor_lc_status preserving type )                as TranspOrdLifeCycleStatus,
      @ObjectModel.foreignKey.association: '_TranspOrdSubcontractingSts'
      subcontracting                                                               as TranspOrderSubcontrgSts,
      @ObjectModel.foreignKey.association: '_TranspOrdConfirmationStatus'
      confirmation                                                                 as TransportationOrderConfSts,
      @ObjectModel.foreignKey.association: '_TransportationOrderExecSts'
      execution                                                                    as TransportationOrderExecSts,
      @ObjectModel.foreignKey.association: '_TranspOrdGoodsMvtStatus'
      dlv_goods_mvmnt                                                              as TranspOrdGoodsMovementStatus,
      @ObjectModel.foreignKey.association: '_TranspOrdWhseProcgStatus'
      wh_processing_status                                                         as TranspOrdWhseProcessingStatus,
      @ObjectModel.foreignKey.association: '_TranspOrdDngrsGdsStatus'
      cast(dg_status as /scmtms/vdm_tor_dg_status preserving type )                as TranspOrderDngrsGdsSts,
      @ObjectModel.foreignKey.association: '_TranspOrdPlanningBlock'
      cast(blk_plan as /scmtms/vdm_block_planning preserving type )                as TranspOrdPlanningBlock,
      @Semantics.booleanIndicator
      @ObjectModel.foreignKey.association: '_TranspOrdExecutionIsBlocked'
      cast(blk_exec as /scmtms/vdm_block_execution preserving type )               as TranspOrdExecutionIsBlocked,
      @ObjectModel.foreignKey.association: '_TranspOrdPlanningStatus'
      cast(plan_status_root as /scmtms/vdm_tor_pln_status preserving type )        as TranspOrdPlanningStatus,

      @ObjectModel.foreignKey.association: '_TranspOrdCreationType'
      creation_type                                                                as TransportationOrderCrtnType,
      //@Semantics.user.createdBy: true
      cast(created_by as vdm_createdbyuserid preserving type )                     as CreatedByUser,
      cast(created_on      as /scmtms/vdm_creation_datetme preserving type)        as CreationDateTime,
      //@Semantics.user.lastChangedBy: true
      cast(changed_by as vdm_lastchangedbyuserid preserving type )                 as LastChangedByUser,
      cast(changed_on      as /scmtms/vdm_changed_datetme preserving type)         as ChangedDateTime,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TransportationOrderItem,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TransportationOrderStop,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TransportationOrderBP,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspOrdDocumentReference,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TransportationOrderEvent,

      _Consignee,
      _Shipper,
      _Carrier,
      _ExectgCarrier,

      _PurchasingCompanyCode,
      _TransportationOrderType,
      _TransportationOrderCategory,
      _TranspOrdPlanningBlock,
      _TranspOrdExecutionIsBlocked,
      _TranspSCACCode,
      _TranspOrdShippingType,
      _MovementType,
      _TranspOrdLifeCycleStatus,

      _TransportationOrderExecSts,
      _TranspOrdDngrsGdsStatus,
      _TranspOrdConfirmationStatus,
      _TranspOrdSubcontractingSts,
      _TranspOrdWhseProcgStatus,
      _TranspOrdGoodsMvtStatus,
      _TranspOrdPlanningStatus,

      _MeansOfTransport,
      _TransportationMode,
      _TransportationModeCategory,
      _CreatedBy,
      _LastChangedBy,
      _TranspOrdResponsiblePerson,
      _TranspOrdCreationType,
      _TranspOrdInvcgCarrierLevel,
      _TranspOrdPalletSpacesUnit,
      _TranspOrdLoadMetersUnit,
      _TranspOrdNetDurationUnit

}
```
